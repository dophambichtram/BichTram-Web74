import { ObjectId } from "mongodb";
import User from "../models/schema/User.schema.js";
import databaseService from "./database.services.js";
import bcrypt from "bcrypt";

class UserService {
  async register(payload) {
    const user_id = new ObjectId();
    await databaseService.users.insertOne(
      new User({
        ...payload,
        password: bcrypt.hashSync(payload.password + process.env.HASH_ROUND),
      })
    );
    const access_token = await signToken({ payload: user_id });
    return access_token;
  }
  async login(user_id) {
    const access_token = await signToken({ payload: user_id });
    return access_token;
  }
  async get(user_id) {
    const access_token = await signToken({ payload: user_id });
    return access_token;
  }

}

const userService = new UserService();
export default userService;