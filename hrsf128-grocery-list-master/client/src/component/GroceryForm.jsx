import React from 'react';

class GroceryForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      item:'',
      quantity: ''
    }

    this.inputHandler = this.inputHandler.bind(this);
    this.addGroceries = this.addGroceries.bind(this);
  }

  inputHandler(event) {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  }

  submitHandler(event) {
    event.preventDefault();
    this.props.submitHandler(this.state);
    this.setState({
      item: '',
      quantity: ''
    })
  }

  addGroceries(grocery) {
    console.log('HAHAHA')
    $.ajax({
      url: 'http://localhost:3000/api/groceries',
      method: 'POST',
      data: grocery,
      success: () =>{console.log('success', grocery)},
      error: err => console.log(err)
    });
  }


  render() {
    return (
      <form onSubmit={()=>{this.addGroceries(this.state)}}>
        <label> Item
          <input name="item" value={this.state.item} onChange={this.inputHandler}/>
        </label>
        <label> Qunatity
          <input name="quantity" value={this.state.quantity} onChange={this.inputHandler}/>
        </label>
        <button>Add Grocery</button>
      </form>
    )
  }
}

export default GroceryForm;