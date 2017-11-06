import React, { Component } from 'react';

class ExpenseForm extends Component {
  state = {
    amount: '',
    description: '',
    note: ''
  }

  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(() => ({
      description
    }));
  }

  onNoteChange = (e) => {
    const note = e.target.value;
    this.setState(() => ({note}));
  }

  onAmountChange = (e) => {
    const amount = e.target.value;
    if (amount.match(/^\d*(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }));
    }

  }

  render() {
    return (
      <div>
        <form action="">
          <input
            type="text"
            placeholder="Description"
            autoFocus
            value={this.state.description}
            onChange={this.onDescriptionChange}
          />
          <input
            type="text"
            placeholder="Amount"
            value={this.state.amount}
            onChange={this.onAmountChange}
          />
          <textarea
            placeholder="Add a note for your expense (optional)"
            cols="30" rows="10"
            onChange={this.onNoteChange}
          >
            {this.state.note}
          </textarea>
          <button type="Submit">Add Expense</button>
        </form>
      </div>
    );
  }
}

export default ExpenseForm;
