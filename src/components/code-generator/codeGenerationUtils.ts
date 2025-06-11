
export const generateCustomCode = (language: string, userPrompt: string): string => {
  const templates: Record<string, string> = {
    css: `.generated-component {
  /* Generated CSS for: ${userPrompt} */
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.generated-component h2 {
  margin: 0;
  font-size: 1.5rem;
  font-weight: bold;
}

.generated-component p {
  margin: 0;
  opacity: 0.9;
  line-height: 1.6;
}

.generated-component .button {
  align-self: flex-start;
  padding: 0.75rem 1.5rem;
  background: rgba(255, 255, 255, 0.2);
  border: none;
  border-radius: 4px;
  color: white;
  cursor: pointer;
  transition: background 0.3s ease;
}

.generated-component .button:hover {
  background: rgba(255, 255, 255, 0.3);
}`,
    sql: `-- Generated SQL for: ${userPrompt}
-- Database schema and queries

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    title VARCHAR(200) NOT NULL,
    content TEXT,
    status VARCHAR(20) DEFAULT 'draft',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Sample queries
SELECT u.username, COUNT(p.id) as post_count
FROM users u
LEFT JOIN posts p ON u.id = p.user_id
WHERE u.created_at >= CURRENT_DATE - INTERVAL '30 days'
GROUP BY u.id, u.username
ORDER BY post_count DESC;

-- Insert sample data
INSERT INTO users (username, email) VALUES
('john_doe', 'john@example.com'),
('jane_smith', 'jane@example.com');`
  };

  return templates[language] || `// Generated ${language} code for: ${userPrompt}
// This is a placeholder implementation

function generatedFunction() {
    console.log("Generated code based on: ${userPrompt}");
    // Implementation would go here
    return "Generated result";
}`;
};
