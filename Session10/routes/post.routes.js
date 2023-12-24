
import express from "express";
import { validateToken } from "../controller/validateToken.js";
import { createPostController } from "../controller/createController.js";
import { getMeController } from "../controller/getMeController.js";
export const PostRoute = express.Router();
PostRoute.post("/", createPostController);
PostRoute.get("/me", getMeController);