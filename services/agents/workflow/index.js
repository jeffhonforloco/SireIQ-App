
/**
 * Workflow Agent Service
 * Handles workflow creation, execution, and management
 */

// Import dependencies
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

// Initialize express app
const app = express();
app.use(cors());
app.use(bodyParser.json());

// In-memory database for demo purposes
// In production, this would connect to a dedicated database
const workflowsDB = {
  templates: [
    { id: 'wf-1', name: 'Content Creation', steps: 5, category: 'productivity' },
    { id: 'wf-2', name: 'Data Analysis', steps: 7, category: 'analytics' },
    { id: 'wf-3', name: 'Code Review', steps: 3, category: 'development' },
    { id: 'wf-4', name: 'Meeting Summary', steps: 4, category: 'productivity' }
  ],
  instances: [
    { id: 'inst-1', templateId: 'wf-1', status: 'running', progress: 60, createdAt: new Date().toISOString() },
    { id: 'inst-2', templateId: 'wf-2', status: 'completed', progress: 100, createdAt: new Date(Date.now() - 86400000).toISOString() },
    { id: 'inst-3', templateId: 'wf-3', status: 'failed', progress: 33, createdAt: new Date(Date.now() - 172800000).toISOString() }
  ]
};

/**
 * Main handler function for the workflow agent
 */
async function run(req, res) {
  const { action, templateId, instanceId } = req.body;
  
  if (!action) {
    throw new Error("Missing required field: action");
  }
  
  let result;
  
  try {
    switch (action) {
      case 'list-templates':
        result = workflowsDB.templates;
        break;
      
      case 'get-template':
        if (!templateId) {
          throw new Error("Missing required field: templateId");
        }
        result = workflowsDB.templates.find(t => t.id === templateId);
        if (!result) {
          return res.status(404).json({ error: "Workflow template not found" });
        }
        break;
      
      case 'list-instances':
        result = workflowsDB.instances;
        break;
        
      case 'get-instance':
        if (!instanceId) {
          throw new Error("Missing required field: instanceId");
        }
        result = workflowsDB.instances.find(i => i.id === instanceId);
        if (!result) {
          return res.status(404).json({ error: "Workflow instance not found" });
        }
        break;
        
      case 'create-instance':
        if (!templateId) {
          throw new Error("Missing required field: templateId");
        }
        
        // Check if template exists
        const template = workflowsDB.templates.find(t => t.id === templateId);
        if (!template) {
          return res.status(404).json({ error: "Workflow template not found" });
        }
        
        // Create new instance
        const newInstance = {
          id: `inst-${Date.now()}`,
          templateId,
          status: 'running',
          progress: 0,
          createdAt: new Date().toISOString()
        };
        
        workflowsDB.instances.push(newInstance);
        result = newInstance;
        break;
        
      default:
        return res.status(400).json({ error: `Unsupported action: ${action}` });
    }
    
    return res.json({ success: true, data: result });
  } catch (error) {
    console.error("Workflow agent error:", error);
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
const PORT = process.env.PORT || 3003;
app.listen(PORT, () => {
  console.log(`Workflow agent service running on port ${PORT}`);
});

// Export for testing
module.exports = { run };
