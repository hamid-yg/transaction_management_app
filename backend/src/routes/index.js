const transactionController = require("../controllers/transactionController");

const routes = [
    {
        method: 'GET',
        url: '/api/transactions',
        handler: transactionController.getTransactions
    },
    {
        method: 'GET',
        url: '/api/transactions/:id',
        handler: transactionController.getTransaction
    },
    {
        method: 'POST',
        url: '/api/transactions',
        handler: transactionController.addTransaction
    },
    {
        method: 'PUT',
        url: '/api/transactions/:id',
        handler: transactionController.updateTransaction
    },
    {
        method: 'DELETE',
        url: '/api/transactions/:id',
        handler: transactionController.delTransaction
    }
];

module.exports = routes;