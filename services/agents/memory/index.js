
/**
 * Memory Agent Service
 * Handles vector storage and retrieval for contextual memory
 */

// Import dependencies
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

// Initialize express app
const app = express();
app.use(cors());
app.use(bodyParser.json());

// Mock Pinecone client for vector storage
// In production, this would be a real Pinecone client
class PineconeClient {
  constructor() {
    this.vectors = {};
    console.log("Initialized Pinecone client");
  }
  
  async upsert({ namespace, vectors }) {
    if (!this.vectors[namespace]) {
      this.vectors[namespace] = [];
    }
    
    vectors.forEach(vector => {
      // Check if vector with this id already exists
      const existingIndex = this.vectors[namespace].findIndex(v => v.id === vector.id);
      if (existingIndex >= 0) {
        this.vectors[namespace][existingIndex] = vector;
      } else {
        this.vectors[namespace].push(vector);
      }
    });
    
    return { upsertedCount: vectors.length };
  }
  
  async query({ namespace, topK, vector }) {
    if (!this.vectors[namespace]) {
      return { matches: [] };
    }
    
    // Simple mock: just return up to topK vectors
    // In a real implementation, this would perform vector similarity search
    const matches = this.vectors[namespace]
      .slice(0, topK)
      .map(v => ({ id: v.id, score: Math.random(), values: v.values, metadata: v.metadata }));
      
    return { matches };
  }
  
  async fetch({ namespace, ids }) {
    if (!this.vectors[namespace]) {
      return { vectors: {} };
    }
    
    const result = {};
    ids.forEach(id => {
      const vector = this.vectors[namespace].find(v => v.id === id);
      if (vector) {
        result[id] = vector;
      }
    });
    
    return { vectors: result };
  }
  
  async delete({ namespace, ids }) {
    if (!this.vectors[namespace] && !ids) {
      return { deletedCount: 0 };
    }
    
    if (!ids) {
      // Delete entire namespace
      const count = this.vectors[namespace]?.length || 0;
      delete this.vectors[namespace];
      return { deletedCount: count };
    }
    
    const initialCount = this.vectors[namespace]?.length || 0;
    this.vectors[namespace] = this.vectors[namespace].filter(v => !ids.includes(v.id));
    return { deletedCount: initialCount - (this.vectors[namespace]?.length || 0) };
  }
}

// Initialize Pinecone client
const pinecone = new PineconeClient();

/**
 * Main handler function for the memory agent
 */
async function run(req, res) {
  const { action, namespace, vectors, id, ids, vector, topK, metadata } = req.body;
  
  if (!action) {
    throw new Error("Missing required field: action");
  }
  
  if (!namespace) {
    throw new Error("Missing required field: namespace");
  }
  
  let result;
  
  try {
    switch (action) {
      case 'upsert':
        if (!vectors || !Array.isArray(vectors)) {
          throw new Error("Missing or invalid field: vectors (must be an array)");
        }
        result = await pinecone.upsert({ namespace, vectors });
        break;
        
      case 'query':
        if (!vector) {
          throw new Error("Missing required field: vector");
        }
        result = await pinecone.query({ 
          namespace, 
          vector, 
          topK: topK || 10
        });
        break;
        
      case 'fetch':
        if (!ids || !Array.isArray(ids)) {
          throw new Error("Missing or invalid field: ids (must be an array)");
        }
        result = await pinecone.fetch({ namespace, ids });
        break;
        
      case 'delete':
        result = await pinecone.delete({ 
          namespace, 
          ids: ids || undefined
        });
        break;
        
      default:
        return res.status(400).json({ error: `Unsupported action: ${action}` });
    }
    
    return res.json({ success: true, data: result });
  } catch (error) {
    console.error("Memory agent error:", error);
    return res.status(500).json({ 
      error: error.message || "An unexpected error occurred" 
    });
  }
}

// Set up routes
app.post('/run', (req, res) => {
  run(req, res).catch(err => {
    console.error("Unhandled error in run function:", err);
    res.status(500).json({ error: "Internal server error" });
  });
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

// Start the server
const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
  console.log(`Memory agent service running on port ${PORT}`);
});

// Export for testing
module.exports = { run };
