import React, { useState, useEffect } from 'react'

const EditTransaction = props => {
	const [ transaction, setTransaction ] = useState(props.currentTransaction);

  useEffect(
    () => {
      setTransaction(props.currentTransaction);
    }, [props]
  );

	const handleChange = event => {
		const { name, value } = event.target
		setTransaction({ ...transaction, [name]: value })
	}

	return (
		<form
			onSubmit={event => {
				event.preventDefault()
				props.updateTransaction(transaction.id, transaction);
			}}
		>

			<div class="mb-3">
				<label className="form-label">Amount</label>
				<input type="number" className="form-control" name="amount" value={transaction.amount} onChange={handleChange} />
			</div>

			<div class="mb-3">
				<label className="form-label">Description</label>
				<input type="text" className="form-control" name="description" value={transaction.description} onChange={handleChange} />
			</div>

			<button type="submit" className="btn btn-primary">Update transaction</button>
      <button className="btn btn-danger" onClick={() => props.setEditing(false)}>Cancel</button>

		</form>
	)
}

export default EditTransaction;