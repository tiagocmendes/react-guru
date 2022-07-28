const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
    title: String,
    price: Number,
    quantity: Number,
    description: String,
});

const cartSchema = new mongoose.Schema({
    showCart: Boolean,
    items: [itemSchema],
});

const Item = mongoose.model("Item", itemSchema);
const Cart = mongoose.model("Cart", cartSchema);

module.exports = { Cart, Item };
