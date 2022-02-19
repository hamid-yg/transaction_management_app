import React, { useState } from 'react'

const AddTransaction = props => {
	const initial = { id: 0, amount: 0, description: '', created_at: "", updated_at: ""}
	const [ transaction, setTransaction ] = useState(initial);

	const handleInputChange = event => {
		const { name, value } = event.target
		const today = new Date();
		const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate() + ' ' + today.getHours() + ':' + today.getMinutes();
		setTransaction({ ...transaction, [name]: value, created_at: date, updated_at: date })
	}

	return (
		<form
			onSubmit={event => {
				event.preventDefault()
				if (!transaction.amount || !transaction.description) return
				props.addTransaction(transaction);
			}}
		>

			<div className="mb-3">
				<label className="form-label">Amount</label>
				<input type="number" className="form-control" name="amount" value={transaction.amount} onChange={handleInputChange} />
			</div>

			<div className="mb-3">
				<label className="form-label">Description</label>
				<input type="text" className="form-control" name="description" value={transaction.description} onChange={handleInputChange} />
			</div>

			<button type="submit" className="btn btn-primary">Create transaction</button>

		</form>
	)
}

export default AddTransaction;