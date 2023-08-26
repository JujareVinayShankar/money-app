// Write your code here
import './index.css'

const TransactionItem = props => {
  const {eachTransaction, onDeleteButton} = props
  const {id, title, amount, optionType} = eachTransaction
  const onDelete = () => {
    onDeleteButton(id)
  }
  return (
    <li className="list-item">
      <h1 className="history-side a">{title}</h1>
      <h1 className="history-side a">{amount}</h1>
      <h1 className="history-side a">{optionType}</h1>
      <button
        type="button"
        className="button"
        onClick={onDelete}
        data-testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
          className="delete-icon"
        />
      </button>
    </li>
  )
}

export default TransactionItem
