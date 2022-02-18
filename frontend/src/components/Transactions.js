import React from 'react';

const Transactions = props => (
  <table className="table table-striped table-bordered text-center">
    <thead>
      <tr>
        <th>Amount</th>
        <th>Description</th>
        <th>Created At</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {props.transactions.length > 0 ? (props.transactions.map(transaction => (
        <tr key={transaction.id}>
          <td>{transaction.amount}</td>
          <td>{transaction.description}</td>
          <td>Date</td>
          <td>
            <button onClick={() => props.updateTransaction(transaction)} className="btn btn-primary">
              Edit
            </button>
            <button onClick={() => props.deleteTransaction(transaction.id)} className="btn btn-danger">
              Delete
            </button>
          </td>
        </tr>
        ))
      ) : (
        <tr>
          <td colSpan={4}>No transactions</td>
        </tr>
      )}
    </tbody>
  </table>
);

export default Transactions;