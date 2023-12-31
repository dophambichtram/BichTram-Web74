import { User } from "../models/schema/user.models.js";
import { databaseUnit } from "../service/database/database.js";
import { registerHash } from "./hash.service.js";
class UserService {
  async register(payload) {
    payload.password = await registerHash(toString(payload.password));
    console.log(payload.password);
    const result = await databaseUnit.users().insertOne(new User(payload))
    return 1
  }
}
export const userService = new UserService();