import React from 'react';

const Transactions = props => {
  return (
    <table className="table table-striped table-bordered text-center">
      <thead>
        <tr>
          <th>Amount</th>
          <th>Description</th>
          <th>Created At</th>
          <th>Updated At</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {props.transactions.length > 0 ? (props.transactions.map((transaction, id) => (
          <tr key={id}>
            <td>{transaction.amount}</td>
            <td>{transaction.description}</td>
            <td>{new Date(transaction.created_at).getFullYear() + '-' + (new Date(transaction.created_at).getMonth() + 1) + '-' + new Date(transaction.created_at).getDate() + ' ' + new Date(transaction.created_at).getHours() + ':' + new Date(transaction.created_at).getMinutes()}</td>
            <td>{new Date(transaction.updated_at).getFullYear() + '-' + (new Date(transaction.updated_at).getMonth() + 1) + '-' + new Date(transaction.updated_at).getDate() + ' ' + new Date(transaction.updated_at).getHours() + ':' + new Date(transaction.updated_at).getMinutes()}</td>
            <td>
              <button onClick={() => props.updateTransaction(transaction)} className="btn btn-primary">
                Edit
              </button>
              <button onClick={() => props.deleteTransaction(transaction._id)} className="btn btn-danger">
                Delete
              </button>
            </td>
          </tr>
          ))
        ) : (
          <tr>
            <td colSpan={5}>No transactions</td>
          </tr>
        )}
      </tbody>
    </table>
  )
};

export default Transactions;