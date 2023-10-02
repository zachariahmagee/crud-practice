import { MongoClient } from "mongodb"; 

const url = "mongodb://localhost:27017";

const dbName = "crud";

const client = new MongoClient(url, { useUnifiedTopology: true });

export async function connectDB() {
    try {
        await client.connect();
        
        const db = client.db(dbName);
        console.log("Connected to MongoDB");
        return db;
    } catch (err) {
        console.error(`Error connecting to database: ${err}`);
        throw err;
    }
}

export function closeDB() {
    client.close();
    console.log("Closed connection to MongoDB");
}