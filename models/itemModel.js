const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
    itemName: {
        type: String,
        required: true,
    },
    price: {
        required: true,
        type: Number
    },
    quantity: {
        required: true,
        type: Number
    },
    bestBefore: {
        required: true,
        type: Date
    },
    brand: {
        required: true,
        type: String
    },
    itemImage: {
        required: true,
        type: String
    }
}, {
    timestamps: true
})

const Item  = new mongoose.model("item", itemSchema);
module.exports = Item;