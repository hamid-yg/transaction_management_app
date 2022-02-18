const Transaction = require("../models/transactionModel");

const getTransactions = async (req, reply) => {
    try {
        const transactions = await Transaction.find();
        reply.code(200).send(transactions);
    } catch (err) {
        console.log(err);
    };
};

const getTransaction = async (req, reply) => {
    try {
        const transaction = await Transaction.findById(req.params.id);
        reply.send(transaction)
    } catch (err) {
        console.log(err);
    };
};

const addTransaction = async (req, reply) => {
    try {
        const transaction = new Transaction(req.body);
        const result = await transaction.save();
        reply.code(201).send(result);
    } catch (err) {
        console.log(err);
    };
};

const updateTransaction = async (req, reply) => {
    try {
        const { ...update } = req.body;
        const transaction = await Transaction.findByIdAndUpdate(req.params.id, update, {new: true});
        reply.send(transaction);
    } catch (err) {
        console.log(err);
    };
};

const delTransaction = async (req, reply) => {
    try {
        const transaction = await Transaction.findByIdAndRemove(req.params.id);
        reply.send(transaction);
        return transaction;
    } catch (err) {
        console.log(err);
    };
};

module.exports = {getTransactions, getTransaction, addTransaction, updateTransaction, delTransaction };