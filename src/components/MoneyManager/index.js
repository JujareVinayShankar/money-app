import {Component} from 'react'

import './index.css'

import {v4} from 'uuid'

import MoneyDetails from '../MoneyDetails'

import TransactionItem from '../TransactionItem'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here

class MoneyManager extends Component {
  state = {
    transactionList: [],
    titleInput: '',
    amountInput: '',
    optionId: transactionTypeOptions[0].optionId,
  }

  setTitle = event => {
    this.setState({titleInput: event.target.value})
  }

  setAmount = event => {
    this.setState({amountInput: event.target.value})
  }

  setType = event => {
    this.setState({optionId: event.target.value})
  }

  onAddTransaction = event => {
    event.preventDefault()
    const {titleInput, amountInput, optionId} = this.state
    const optionType = transactionTypeOptions.find(
      eachTransaction => eachTransaction.optionId === optionId,
    )

    const {displayText} = optionType
    const newTransaction = {
      id: v4(),
      title: titleInput,
      amount: parseInt(amountInput),
      optionType: displayText,
    }

    this.setState(prevState => ({
      transactionList: [...prevState.transactionList, newTransaction],
      titleInput: '',
      amountInput: '',
      optionId: transactionTypeOptions[0].optionId,
    }))
  }

  onDeleteButton = id => {
    const {transactionList} = this.state
    const updatedTransactionList = transactionList.filter(
      eachTransaction => eachTransaction.id !== id,
    )

    this.setState({transactionList: updatedTransactionList})
  }

  getExpenses = () => {
    const {transactionList} = this.state
    let expensesAmount = 0

    transactionList.forEach(eachTransaction => {
      if (
        eachTransaction.optionType === transactionTypeOptions[1].displayText
      ) {
        expensesAmount += eachTransaction.amount
      }
    })
    return expensesAmount
  }

  getIncome = () => {
    const {transactionList} = this.state
    let incomeAmount = 0
    transactionList.forEach(eachTransaction => {
      if (
        eachTransaction.optionType === transactionTypeOptions[0].displayText
      ) {
        incomeAmount += eachTransaction.amount
      }
    })
    return incomeAmount
  }

  getBalance = () => {
    let incomeAmount = 0
    let balanceAmount = 0
    let expenseAmount = 0
    const {transactionList} = this.state
    transactionList.forEach(eachTransaction => {
      if (eachTransaction.optionId === transactionTypeOptions[0].displayText) {
        incomeAmount += eachTransaction.amount
      } else {
        expenseAmount += eachTransaction.amount
      }
    })
    balanceAmount = expenseAmount - incomeAmount

    return balanceAmount
  }

  render() {
    const {transactionList, titleInput, amountInput, optionId} = this.state
    const expensesAmount = this.getExpenses()
    const incomeAmount = this.getIncome()
    const balanceAmount = this.getBalance()
    console.log(transactionList)
    return (
      <div className="bg-container">
        <div className="top-container">
          <h1 className="heading">Hi, Richard</h1>
          <p className="paragraph">
            Welcome back to your <span>Money Manager</span>
          </p>
        </div>
        <div className="center-container">
          <MoneyDetails
            transactionTypeOptions={transactionTypeOptions}
            balanceAmount={balanceAmount}
            expensesAmount={expensesAmount}
            incomeAmount={incomeAmount}
          />
        </div>
        <div className="bottom-container">
          <div className="add-transaction-container">
            <form className="from" onSubmit={this.onAddTransaction}>
              <div className="form-container">
                <h1 className="form-heading">Add Transaction</h1>
                <label htmlFor="TitleInput">TITLE</label>
                <input
                  placeholder="TITLE"
                  value={titleInput}
                  onChange={this.setTitle}
                />
                <label htmlFor="AmountInput">AMOUNT</label>
                <input
                  placeholder="AMOUNT"
                  value={amountInput}
                  onChange={this.setAmount}
                />
                <label htmlFor="TypeInput">TYPE</label>
                <select id="TypeInput" value={optionId} onChange={this.setType}>
                  {transactionTypeOptions.map(eachHistory => (
                    <option
                      key={eachHistory.optionId}
                      value={eachHistory.optionId}
                    >
                      {eachHistory.displayText}
                    </option>
                  ))}
                </select>
                <button type="submit" className="submit-button">
                  Add
                </button>
              </div>
            </form>
          </div>
          <div className="history-container">
            <h1 className="history-heading">History</h1>
            <ul className="history-list">
              <li className="list-item">
                <p className="history-side">Title</p>
                <p className="history-side">Amount</p>
                <p className="history-side">Type</p>
                <h1>{}</h1>
              </li>
              {transactionList.map(eachTransaction => (
                <TransactionItem
                  eachTransaction={eachTransaction}
                  onDeleteButton={this.onDeleteButton}
                  key={eachTransaction.id}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
