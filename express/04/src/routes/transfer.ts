import { Router } from "express";
import { validateRequest } from "../utils/validateRequest";
import { TransferSchema } from "../schema/transferSchema";
import { users } from "../db";

const transferRouter: Router = Router();

transferRouter.post("/", validateRequest(TransferSchema), (req, res) => {
  const { fromCustomerId, toCustomerId, points } = req.body;

  const fromUser = users.find((user) => user.id === fromCustomerId);
  const toUser = users.find((user) => user.id === toCustomerId);

  if (!fromUser || !toUser) {
    return res.status(404).json({ error: "User not found" });
  }

  if (fromUser.points < points) {
    return res.status(400).json({ error: "Insufficient points" });
  }

  fromUser.points -= points;
  toUser.points += points;

  res.json({ message: "Transfer successful" });
});

export default transferRouter;
