import React from 'react';
import GroceryImage from './GroceryImage.jsx';
import GroceryForm from './GroceryForm.jsx';
import GroceryList from './GroceryList.jsx';
import $ from 'jquery';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      groceries: [{
        id: 1,
        item: 'apple',
        quantity: 10
      }]
    }
    this.getGroceries = this.getGroceries.bind(this);

  }

  componentDidMount() {
    this.getGroceries();
  }
  /*
   if we want to use ajax, we should npm install jquery at terminal first,
  then use
  */
  getGroceries() {
    console.log('getting')
    $.ajax({
      url: 'http://localhost:3000/api/groceries',
      method: 'GET',
      success: groceries => {
      this.setState({ groceries })},
      error: err => console.log(err)
    });
  }



//   getGroceries() {
//     fetch('http://localhost:5501/api/groceries')
//         .then(res => res.json())
//         .then(
//           (groceries) => {
//             console.log(groceries)
//             this.setState({
//               groceries: groceries
//             })
//           })
//         .catch((err) => {
//           console.log(err)
//         })
//  }

//   addGroceries(item) {
//     fetch('/api/groceries', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/x-www-form-urlencoded'
//       },
//       body: item

//     })
//     .then(
//       (result) => {
//         this.getGroceries()
//       },
//       (error) =>{
//         console.log(error)
//       }
//     )

// }


  /*
  because we dont want to mutate our state, so we gonna make a copy of state to change it
  */

  // addToGroceries(item) {
  //   const groceries = [...this.state.groceries, item];
  //   this.setState({ groceries })

  //    // const groceries = this.state.groceries.slice();
  //   // groceries.push(item)
  //   // this.setState({ groceries })

  // }
 render() {
    // console.log('rendered');
    return (
      <div>
        <GroceryImage />
        <GroceryForm gettingGroceries={this.getGroceries} />
        <GroceryList groceries={this.state.groceries} />
      </div>
    )
  }
}
export default App;


