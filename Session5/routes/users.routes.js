import { Router } from "express";
import {
  registerController,
  loginController,
  getMeController,
} from "../controllers/users.controller.js";

import {
  registerValidator,
  loginValidator,
  accessTokenValidator,
  getMeValidator,
} from "../middlewares/users.middleware.js";
const userRoute = Router();

userRoute.post('/register', registerValidator, registerController);
userRoute.post('/login', loginValidator, loginController);
userRoute.post('/me', accessTokenValidator, getMeController);
userRoute.get('/get', getMeValidator);
export default userRoute;

