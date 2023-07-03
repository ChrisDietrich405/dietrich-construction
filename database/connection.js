import { MongoClient } from 'mongodb';

// Connection URL
const uri = process.env.DATABASE_CONNECTION;

// Database Name
const dbName = 'mydatabase';

// Cached connection instance
let cachedDb = null;

// Function to connect to the MongoDB server
export async function connectToDatabase() {
  // If a database connection already exists, use it
  if (cachedDb) {
    return cachedDb;
  }

  // If no connection exists, create a new one
  const client = await MongoClient.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  // Get the database object
  const db = client.db(dbName);

  // Cache the database connection
  cachedDb = db;

  return db;
}
