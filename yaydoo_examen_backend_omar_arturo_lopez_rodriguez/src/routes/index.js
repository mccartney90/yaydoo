import express from "express";
import AuthController from "../controllers/AuthController";
import UserController from "../controllers/UserController";
import { isAdmin, isAuth } from "../middleware/auth";
const api = express.Router();

api.post("/login", AuthController.login);
api.post("/user/create", [isAuth], UserController.create);
api.put("/user/update", [isAuth], UserController.updateUser);
api.get("/user/view", [isAuth], UserController.viewUser);
api.delete("/user/delete", [isAuth], UserController.deleteUser);
api.get("/users", [isAuth, isAdmin], UserController.listUsers);

module.exports = api;
