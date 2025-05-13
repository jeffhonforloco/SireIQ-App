
/**
 * Governance Agent Service
 * Handles policy enforcement and compliance monitoring
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
const policiesDB = {
  items: [
    { id: 'policy-1', name: 'Data Protection Policy', status: 'active', compliance: 87 },
    { id: 'policy-2', name: 'User Access Control', status: 'active', compliance: 92 },
    { id: 'policy-3', name: 'Content Moderation', status: 'pending-review', compliance: 65 },
    { id: 'policy-4', name: 'Uptime Requirements', status: 'active', compliance: 99 },
  ]
};

/**
 * Main handler function for the governance agent
 */
async function run(req, res) {
  const { action, policyId } = req.body;
  
  if (!action) {
    throw new Error("Missing required field: action");
  }
  
  let result;
  
  try {
    switch (action) {
      case 'list':
        result = policiesDB.items;
        break;
      
      case 'get':
        if (!policyId) {
          throw new Error("Missing required field: policyId");
        }
        result = policiesDB.items.find(p => p.id === policyId);
        if (!result) {
          return res.status(404).json({ error: "Policy not found" });
        }
        break;
        
      case 'check-compliance':
        // Calculate overall compliance
        const totalCompliance = policiesDB.items
          .filter(p => p.status === 'active')
          .reduce((sum, policy) => sum + policy.compliance, 0);
          
        const activePolicies = policiesDB.items.filter(p => p.status === 'active').length;
        result = {
          overallCompliance: Math.round(totalCompliance / (activePolicies || 1)),
          totalPolicies: policiesDB.items.length,
          activePolicies
        };
        break;
        
      default:
        return res.status(400).json({ error: `Unsupported action: ${action}` });
    }
    
    return res.json({ success: true, data: result });
  } catch (error) {
    console.error("Governance agent error:", error);
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
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Governance agent service running on port ${PORT}`);
});

// Export for testing
module.exports = { run };
