const cors = require("cors");
const path = require("path");
const dotenv = require("dotenv");
const express = require("express");
const mongoose = require("mongoose");

const { Cart, Item } = require("./models/cart");

dotenv.config();
const app = express();

const mongodbServer = process.env.MONGODB_SERVER;
const dataBaseName = "shoppingCart";
mongoose
    .connect(`${mongodbServer}/${dataBaseName}`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log(`INFO: Connected to MongoDB on ${mongodbServer}`))
    .catch((err) => console.log(err));

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());

app.put("/cart/:id", async (req, res) => {
    const { id } = req.params;
    const cart = await Cart.findByIdAndUpdate(id, req.body);
    const updatedCart = await Cart.findById(id);
    res.send({ message: "updated with success!", data: updatedCart });
});

app.get("/cart", async (req, res) => {
    const cart = await Cart.find({});
    res.send(cart);
});

app.post("/cart", async (req, res) => {
    const cart = new Cart(req.body);
    await cart.save();
    res.send(cart);
});

app.get("/", (req, res) => {
    res.send("HOME");
});

app.listen(process.env.PORT, () =>
    console.log(`Server listening on port ${process.env.PORT}`)
);
