
const { run } = require('../index');

// Mock Express request and response
const mockRequest = (body = {}) => ({ body });
const mockResponse = () => {
  const res = {};
  res.status = jest.fn().mockReturnValue(res);
  res.json = jest.fn().mockReturnValue(res);
  return res;
};

describe('Workflow Agent', () => {
  test('should return list of templates', async () => {
    // Arrange
    const req = mockRequest({ action: 'list-templates' });
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
  
  test('should return specific template when valid ID provided', async () => {
    // Arrange
    const req = mockRequest({ 
      action: 'get-template', 
      templateId: 'wf-1'
    });
    const res = mockResponse();
    
    // Act
    await run(req, res);
    
    // Assert
    expect(res.json).toHaveBeenCalledWith(
      expect.objectContaining({
        success: true,
        data: expect.objectContaining({
          id: 'wf-1'
        })
      })
    );
  });
  
  test('should return list of instances', async () => {
    // Arrange
    const req = mockRequest({ action: 'list-instances' });
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
  
  test('should create new workflow instance', async () => {
    // Arrange
    const req = mockRequest({ 
      action: 'create-instance', 
      templateId: 'wf-1'
    });
    const res = mockResponse();
    
    // Act
    await run(req, res);
    
    // Assert
    expect(res.json).toHaveBeenCalledWith(
      expect.objectContaining({
        success: true,
        data: expect.objectContaining({
          id: expect.any(String),
          templateId: 'wf-1',
          status: 'running'
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
