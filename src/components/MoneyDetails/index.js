// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {balanceAmount, incomeAmount, expensesAmount} = props
  return (
    <ul className="tab-list">
      <li className="tab-container green">
        <div className="img">
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
            alt="balance"
            className="tab-img"
          />
        </div>
        <div className="text">
          <p className="tab-heading">Your Balance</p>
          <p className="tab-rupees" data-testid="balanceAmount">
            {balanceAmount}
          </p>
        </div>
      </li>
      <li className="tab-container blue">
        <div className="img">
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
            alt="income"
            className="tab-img"
          />
        </div>
        <div className="text">
          <p className="tab-heading">Your Income</p>
          <p className="tab-rupees" data-testid="incomeAmount">
            {incomeAmount}
          </p>
        </div>
      </li>
      <li className="tab-container purple">
        <div className="img">
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
            alt="expenses"
            className="tab-img"
          />
        </div>
        <div className="text">
          <p className="tab-heading">Your Expenses</p>
          <p className="tab-rupees" data-testid="expensesAmount">
            {expensesAmount}
          </p>
        </div>
      </li>
    </ul>
  )
}

export default MoneyDetails
