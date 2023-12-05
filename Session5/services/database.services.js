import { MongoClient } from "mongodb";
import { config } from "dotenv";
config();
// Replace the uri string with your connection string.
const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.6qh3ghx.mongodb.net/`;

class DatabaseServices {
  constructor() {
    this.client = new MongoClient(uri);
    this.db = this.client.db(process.env.DB_NAME);
  }
  async run() {
    try {
      await this.db.command({
        ping: 1,
      });
      console.log(
        'Pinged your development. Your connect succesfully to MongoDB'
      );
    } catch (error) {
      console.log('Error', error);
      throw new Error(error.message);
    }
  }
}
const databaseService = new DatabaseServices();
export default databaseService;
