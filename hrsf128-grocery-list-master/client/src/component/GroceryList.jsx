import React from 'react';
import GroceryItem from './GroceryItem.jsx';

const GroceryList = ({ groceries }) => (
  <ul className="groceries">
    {
      groceries.map(grocery => (
        <GroceryItem name={grocery.item} quantity={grocery.quantity} />
      ))
    }
  </ul>
)

export default GroceryList;