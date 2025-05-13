
const { run } = require('../index');

// Mock Express request and response
const mockRequest = (body = {}) => ({ body });
const mockResponse = () => {
  const res = {};
  res.status = jest.fn().mockReturnValue(res);
  res.json = jest.fn().mockReturnValue(res);
  return res;
};

describe('Governance Agent', () => {
  test('should return list of policies', async () => {
    // Arrange
    const req = mockRequest({ action: 'list' });
    const res = mockResponse();
    
    // Act
    await run(req, res);
    
    // Assert
    expect(res.json).toHaveBeenCalledWith(
      expect.objectContaining({
        success: true,
        data: expect.any(Array)
      })
    );
  });
  
  test('should return specific policy when valid ID provided', async () => {
    // Arrange
    const req = mockRequest({ 
      action: 'get', 
      policyId: 'policy-1'
    });
    const res = mockResponse();
    
    // Act
    await run(req, res);
    
    // Assert
    expect(res.json).toHaveBeenCalledWith(
      expect.objectContaining({
        success: true,
        data: expect.objectContaining({
          id: 'policy-1'
        })
      })
    );
  });
  
  test('should return 404 when policy not found', async () => {
    // Arrange
    const req = mockRequest({ 
      action: 'get', 
      policyId: 'non-existent'
    });
    const res = mockResponse();
    
    // Act
    await run(req, res);
    
    // Assert
    expect(res.status).toHaveBeenCalledWith(404);
    expect(res.json).toHaveBeenCalledWith(
      expect.objectContaining({
        error: expect.any(String)
      })
    );
  });
  
  test('should return compliance metrics', async () => {
    // Arrange
    const req = mockRequest({ action: 'check-compliance' });
    const res = mockResponse();
    
    // Act
    await run(req, res);
    
    // Assert
    expect(res.json).toHaveBeenCalledWith(
      expect.objectContaining({
        success: true,
        data: expect.objectContaining({
          overallCompliance: expect.any(Number),
          totalPolicies: expect.any(Number),
          activePolicies: expect.any(Number)
        })
      })
    );
  });
  
  test('should throw error when action is missing', async () => {
    // Arrange
    const req = mockRequest({});
    const res = mockResponse();
    
    // Act
    await run(req, res);
    
    // Assert
    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith(
      expect.objectContaining({
        error: "Missing required field: action"
      })
    );
  });
});
