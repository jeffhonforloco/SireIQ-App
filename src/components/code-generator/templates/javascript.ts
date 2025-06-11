
import { CodeExample } from '../types';

export const javascriptTemplate: CodeExample = {
  language: 'javascript',
  description: 'A utility function with error handling and validation',
  code: `// Utility function for data processing
function processData(data, options = {}) {
  // Input validation
  if (!data || typeof data !== 'object') {
    throw new Error('Invalid data provided');
  }

  const { 
    sortBy = 'name', 
    filterBy = null, 
    transform = false 
  } = options;

  let result = Array.isArray(data) ? [...data] : [data];

  // Apply filtering
  if (filterBy && typeof filterBy === 'function') {
    result = result.filter(filterBy);
  }

  // Apply sorting
  if (sortBy) {
    result.sort((a, b) => {
      const aVal = a[sortBy];
      const bVal = b[sortBy];
      return aVal > bVal ? 1 : aVal < bVal ? -1 : 0;
    });
  }

  // Apply transformation
  if (transform && typeof transform === 'function') {
    result = result.map(transform);
  }

  return result;
}

// Example usage
const sampleData = [
  { name: 'Alice', age: 30, role: 'developer' },
  { name: 'Bob', age: 25, role: 'designer' },
  { name: 'Charlie', age: 35, role: 'manager' }
];

const processed = processData(sampleData, {
  sortBy: 'age',
  filterBy: (item) => item.age >= 30,
  transform: (item) => ({ ...item, senior: item.age >= 30 })
});

console.log(processed);`
};
