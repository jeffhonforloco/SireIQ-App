
/**
 * API Gateway for Agent Services
 * Routes requests to the appropriate containerized agent service
 */

const express = require('express');
const router = express.Router();
const axios = require('axios');

// Map of agent names to their service URLs
const AGENT_SERVICES = {
  'governance': 'http://localhost:3001',
  'memory': 'http://localhost:3002',
  'workflow': 'http://localhost:3003'
};

// Middleware to validate agent name
const validateAgent = (req, res, next) => {
  const agentName = req.params.agent;
  
  if (!AGENT_SERVICES[agentName]) {
    return res.status(404).json({ error: `Agent '${agentName}' not found` });
  }
  
  req.agentUrl = AGENT_SERVICES[agentName];
  next();
};

// Proxy route for all agent requests
router.post('/:agent/run', validateAgent, async (req, res) => {
  try {
    const response = await axios.post(`${req.agentUrl}/run`, req.body);
    return res.json(response.data);
  } catch (error) {
    console.error(`Error forwarding request to ${req.agentUrl}:`, error);
    
    // Forward error response if available
    if (error.response) {
      return res.status(error.response.status).json(error.response.data);
    }
    
    // Generic error for network/connection issues
    return res.status(500).json({ 
      error: "Failed to communicate with agent service" 
    });
  }
});

// Health check route for all agents
router.get('/:agent/health', validateAgent, async (req, res) => {
  try {
    const response = await axios.get(`${req.agentUrl}/health`);
    return res.json(response.data);
  } catch (error) {
    console.error(`Health check failed for ${req.agentUrl}:`, error);
    return res.status(503).json({ 
      error: "Agent service is unavailable" 
    });
  }
});

// Get all available agents
router.get('/', (req, res) => {
  const agents = Object.keys(AGENT_SERVICES).map(name => ({
    name,
    url: `/api/agents/${name}`
  }));
  
  return res.json({ agents });
});

module.exports = router;
