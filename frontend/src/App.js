import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import APIProvider from './helpers/APIProvider';
import Transactions from './components/Transactions';
import AddTransaction from './components/AddTransaction';
import EditTransaction from './components/EditTransaction';

function App() {
	const transactionsData = [
		{ id: 1, amount: 30, description: 'floppydiskette' },
		{ id: 2, amount: 20, description: 'siliconeidolon' },
		{ id: 3, amount: 10, description: 'benisphere' },
	]

	const initial = { id: null, amount: 0, description: '' }
	const [ transactions, setTransactions ] = useState(transactionsData)
	const [ currentTransaction, setCurrentTransaction ] = useState(initial)
	const [ editing, setEditing ] = useState(false)

	const addTransaction = transaction => {
		transaction.id = transactions.length + 1;
		setTransactions([ ...transactions, transaction]);
	}

	const editTransaction = transaction => {
		setEditing(true)
		setCurrentTransaction({ id: transaction.id, amount: transaction.amount, description: transaction.description });
	}

	const updateTransaction = (id, updatedTransaction) => {
		setEditing(false)
		setTransactions(transactions.map(transaction => (transaction.id === id ? updatedTransaction : transaction)))
	}

	const deleteTransaction = id => {
		setEditing(false)
		setTransactions(transactions.filter(transaction => transaction.id !== id));
	}

  return (
		<div className="container mt-5">
			<h1 className='text-primary'>Transaction Management App</h1>
			<div className="row mt-5">
				<div className="col-md-4 col-sm-6 mb-5">
					{editing ? (
						<>
							<h2>Edit transaction</h2>
							<EditTransaction
								editing={editing}
								setEditing={setEditing}
								currentTransaction={currentTransaction}
								updateTransaction={updateTransaction}
							/>
						</>
					) : (
						<>
							<h2>Create new transaction</h2>
							<AddTransaction addTransaction={addTransaction}/>
						</>
					)}
				</div>
				<div className="col-md-8 col-sm-6">
					<h2>View all transactions</h2>
					<Transactions transactions={transactions} updateTransaction={editTransaction} deleteTransaction={deleteTransaction} />
				</div>
			</div>
		</div>
  );
}

export default App;