import React, { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import APIProvider from './helpers/APIProvider';
import Transactions from './components/Transactions';
import AddTransaction from './components/AddTransaction';
import EditTransaction from './components/EditTransaction';

function App() {

	useEffect(() => {
    async function getTransactions() {
      const result = await APIProvider.getAll()
			setTransactions(result.data)
    }
    getTransactions()
  }, [])

	const initial = { id: 0, amount: 0, description: '', created_at: "", updated_at: ""}
	const [ transactions, setTransactions ] = useState(initial)
	const [ currentTransaction, setCurrentTransaction ] = useState(initial)
	const [ editing, setEditing ] = useState(false)

	const addTransaction = async (transaction) => {
		const result = await APIProvider.create(transaction)
		setTransactions([ ...transactions, result.data])
	}

	const editTransaction = transaction => {
		setEditing(true)
		setCurrentTransaction({ id: transaction._id, amount: transaction.amount, description: transaction.description, created_at: transaction.created_at, updated_at: transaction.updated_at });
	}

	const updateTransaction = async (id, updatedTransaction) => {
		// eslint-disable-next-line
		const result = await APIProvider.update(id, updatedTransaction)
		setTransactions(transactions.map(transaction => (transaction._id === id ? updatedTransaction : transaction)))
		setEditing(false)
	}

	const deleteTransaction = async (id) => {
		// eslint-disable-next-line
		const result = await APIProvider.delete(id)
		setTransactions(transactions.filter(transaction => transaction._id !== id));
	}

  return (
		<div className="container mt-5">
			<h1 className='text-primary'>Transaction Management App</h1>
			<div className="row mt-5">
				<div className="col-md-3 col-sm-6 mb-5">
					{editing ? (
						<>
							<h2 className='text-primary'>Edit transaction</h2>
							<EditTransaction
								editing={editing}
								setEditing={setEditing}
								currentTransaction={currentTransaction}
								updateTransaction={updateTransaction}
							/>
						</>
					) : (
						<>
							<h2 className='text-primary'>Create new transaction</h2>
							<AddTransaction addTransaction={addTransaction}/>
						</>
					)}
				</div>
				<div className="col-md-9 col-sm-6">
					<h2 className='text-primary'>View all transactions</h2>
					<Transactions transactions={transactions} updateTransaction={editTransaction} deleteTransaction={deleteTransaction} />
				</div>
			</div>
		</div>
  );
}

export default App;