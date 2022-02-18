const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema({
    amount: Number,
    description: String,
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Transaction", transactionSchema);