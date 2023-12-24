import { MongoClient } from "mongodb";
import { config } from "dotenv";
import process from "process";
config();

// Replace the uri string with your connection string.
const pass = process.env.PASS;
const user = process.env.USER;
const uri = `mongodb+srv://${user}:${pass}@cluster0.bgfip35.mongodb.net`;
class DataBaseService {
  constructor() {
    this.client = new MongoClient(uri);
    this.db = this.client.db(process.env.DATANAME)
  }
  run() {
    try {
      this.client.connect();
    } catch (error) {
      // Ensures that the client will close when you finish/error
      console.log("error", error);
    }
  }
  users() {
    return this.db.collection("user");
  }
  post() {
    return this.db.collection("post");
  }
  hashtag() {
    return this.db.collection("hashtag");
  }
}

export const databaseUnit = new DataBaseService();

// run().catch(console.dir);