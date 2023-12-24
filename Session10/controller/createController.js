import { Hashtag } from "../models/schema/Hastag.models.js";
import { Post } from "../models/schema/Post.models.js";
import { databaseUnit } from "../service/database/database.js"

export const createController = (req, res) => {

  const hashList = req.body.hashtags.map((item) => {

    const hashItem = new Hashtag(item);

    databaseUnit.hashtag().insertOne(hashItem);
    console.log("vao");
    return hashItem.hashID;
  });

  req.body.hashtags = hashList;
  databaseUnit.post().insertOne(new Post(req.body));

  return res.json("post complete")
}