import React, { useState } from 'react'

const AddTransaction = props => {
	const initial = { id: null, amount: 0, description: '' };
	const [ transaction, setTransaction ] = useState(initial);

	const handleInputChange = event => {
		const { name, value } = event.target

		setTransaction({ ...transaction, [name]: value })
	}

	return (
		<form
			onSubmit={event => {
				event.preventDefault()
				if (!transaction.amount || !transaction.description) return

				props.addTransaction(transaction);
				setTransaction(initial);
			}}
		>

			<div class="mb-3">
				<label className="form-label">Amount</label>
				<input type="number" className="form-control" name="amount" value={transaction.amount} onChange={handleInputChange} />
			</div>

			<div class="mb-3">
				<label className="form-label">Description</label>
				<input type="text" class="form-control" name="description" value={transaction.description} onChange={handleInputChange} />
			</div>

			<button type="submit" class="btn btn-primary">Create transaction</button>

		</form>
	)
}

export default AddTransaction;