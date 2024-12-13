import SQLite from 'react-native-sqlite-storage';

const db = SQLite.openDatabase(
  {
    name: 'SireIQ.db',
    location: 'default',
  },
  () => console.log('Database connected'),
  error => console.error('Database error:', error)
);

export const database = {
  async init() {
    const strategies = `
      CREATE TABLE IF NOT EXISTS strategies (
        id TEXT PRIMARY KEY,
        title TEXT NOT NULL,
        description TEXT,
        status TEXT NOT NULL,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
      );
    `;

    const trainingSessions = `
      CREATE TABLE IF NOT EXISTS training_sessions (
        id TEXT PRIMARY KEY,
        title TEXT NOT NULL,
        description TEXT,
        duration INTEGER NOT NULL,
        level TEXT NOT NULL,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
      );
    `;

    try {
      await db.transaction(tx => {
        tx.executeSql(strategies);
        tx.executeSql(trainingSessions);
      });
    } catch (error) {
      console.error('Database initialization error:', error);
    }
  },

  async query(sql: string, params: any[] = []): Promise<any> {
    return new Promise((resolve, reject) => {
      db.transaction(tx => {
        tx.executeSql(
          sql,
          params,
          (_, { rows }) => resolve(rows._array),
          (_, error) => {
            reject(error);
            return false;
          }
        );
      });
    });
  }
};