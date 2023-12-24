import { Post } from "../models/schema/Post.models.js";
import { databaseUnit } from "../database/database";

class PostService {
  async createPost(body) {
    const result = await databaseUnit.post().insertOne(new Post(body))
  }
}
export const postService = new PostService();