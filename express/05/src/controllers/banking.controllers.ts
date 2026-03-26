import { Router } from "express";

interface Orders {
  id: string;
  customerName: string;
  flavor: string;
  quantity: number;
  pickupDate: string;
  status: "pending" | "banking" | "ready" | "delivered";
}

const orders: Orders[] = [
  {
    id: "1",
    customerName: "Alice",
    flavor: "Vanilla",
    quantity: 2,
    pickupDate: "2024-07-01",
    status: "pending",
  },
  {
    id: "2",
    customerName: "Bob",
    flavor: "Chocolate",
    quantity: 1,
    pickupDate: "2024-07-02",
    status: "pending",
  },
];

const BakingController: Router = Router();

BakingController.post("/start", (req, res) => {
  console.log('req.body', req.body)
  const { id } = req.body;
  const order = orders.find((o) => o.id === id);

  if (!order) {
    return res.status(404).json({ error: "Order not found" });
  }

  if (order.status !== "pending") {
    return res.status(400).json({ error: `Order ${id} cannot be started` });
  }

  order.status = "banking";

  return res.json({ message: `Order ${id} has started baking` });
});

BakingController.get("/status/:id", (req, res) => {
  const { id } = req.params;
  const order = orders.find((o) => o.id === id);

  if (!order) {
    return res.status(404).json({ error: "Order not found" });
  }
  
  return res.json({ id: order.id, status: order.status });
});

export default BakingController;
