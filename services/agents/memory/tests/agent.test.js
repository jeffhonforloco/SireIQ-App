
const { run } = require('../index');

// Mock Express request and response
const mockRequest = (body = {}) => ({ body });
const mockResponse = () => {
  const res = {};
  res.status = jest.fn().mockReturnValue(res);
  res.json = jest.fn().mockReturnValue(res);
  return res;
};

describe('Memory Agent', () => {
  test('should upsert vectors', async () => {
    // Arrange
    const req = mockRequest({ 
      action: 'upsert',
      namespace: 'test',
      vectors: [
        { id: 'vec1', values: [0.1, 0.2, 0.3], metadata: { text: 'test' } }
      ]
    });
    const res = mockResponse();
    
    // Act
    await run(req, res);
    
    // Assert
    expect(res.json).toHaveBeenCalledWith(
      expect.objectContaining({
        success: true,
        data: expect.objectContaining({
          upsertedCount: 1
        })
      })
    );
  });
  
  test('should query vectors', async () => {
    // First upsert a vector
    const upsertReq = mockRequest({ 
      action: 'upsert',
      namespace: 'test',
      vectors: [
        { id: 'vec1', values: [0.1, 0.2, 0.3], metadata: { text: 'test' } }
      ]
    });
    const upsertRes = mockResponse();
    await run(upsertReq, upsertRes);
    
    // Now query
    const req = mockRequest({ 
      action: 'query',
      namespace: 'test',
      vector: [0.1, 0.2, 0.3],
      topK: 1
    });
    const res = mockResponse();
    
    // Act
    await run(req, res);
    
    // Assert
    expect(res.json).toHaveBeenCalledWith(
      expect.objectContaining({
        success: true,
        data: expect.objectContaining({
          matches: expect.any(Array)
        })
      })
    );
  });
  
  test('should fetch vectors by ids', async () => {
    // First upsert a vector
    const upsertReq = mockRequest({ 
      action: 'upsert',
      namespace: 'test',
      vectors: [
        { id: 'vec1', values: [0.1, 0.2, 0.3], metadata: { text: 'test' } }
      ]
    });
    const upsertRes = mockResponse();
    await run(upsertReq, upsertRes);
    
    // Now fetch
    const req = mockRequest({ 
      action: 'fetch',
      namespace: 'test',
      ids: ['vec1']
    });
    const res = mockResponse();
    
    // Act
    await run(req, res);
    
    // Assert
    expect(res.json).toHaveBeenCalledWith(
      expect.objectContaining({
        success: true,
        data: expect.objectContaining({
          vectors: expect.any(Object)
        })
      })
    );
  });
  
  test('should delete vectors', async () => {
    // First upsert a vector
    const upsertReq = mockRequest({ 
      action: 'upsert',
      namespace: 'test',
      vectors: [
        { id: 'vec1', values: [0.1, 0.2, 0.3], metadata: { text: 'test' } }
      ]
    });
    const upsertRes = mockResponse();
    await run(upsertReq, upsertRes);
    
    // Now delete
    const req = mockRequest({ 
      action: 'delete',
      namespace: 'test',
      ids: ['vec1']
    });
    const res = mockResponse();
    
    // Act
    await run(req, res);
    
    // Assert
    expect(res.json).toHaveBeenCalledWith(
      expect.objectContaining({
        success: true,
        data: expect.objectContaining({
          deletedCount: expect.any(Number)
        })
      })
    );
  });
  
  test('should throw error when namespace is missing', async () => {
    // Arrange
    const req = mockRequest({ action: 'query' });
    const res = mockResponse();
    
    // Act
    await run(req, res);
    
    // Assert
    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith(
      expect.objectContaining({
        error: "Missing required field: namespace"
      })
    );
  });
});
