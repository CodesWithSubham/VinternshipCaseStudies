// Case Study 02: CRUD Operations

// Add a new vegan dish
db.menu.insertOne({
  name: "Tofu Buddha Bowl",
  cuisine: "Asian",
  price: 9.5,
  tags: ["vegan", "gluten-free"],
  available: true,
});

// Find all available vegan dishes under $12, showing only their name and price.
db.menu.find({ available: true, tags: "vegan", price: { $lt: 12 } }, { name: 1, price: 1, _id: 0 });

// Update the price of “Tofu Buddha Bowl” to $10.00 and add a “popular” tag.
db.menu.updateOne(
  { name: "Tofu Buddha Bowl" },
  {
    $set: { price: 10.0 },
    $push: { tags: "popular" },
  },
);

// Delete the dish “Old Special Soup” from the menu.
db.menu.deleteOne({ name: "Old Special Soup" });
