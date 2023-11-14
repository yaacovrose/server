import express from "express";

import cartController from "./cart.controller";

const cartRouter = express.Router();

cartRouter.get("/:id", cartController.getCartById);

cartRouter.put("/", cartController.updateCart);

cartRouter.delete("/:id", cartController.deleteCart)

export default cartRouter;
