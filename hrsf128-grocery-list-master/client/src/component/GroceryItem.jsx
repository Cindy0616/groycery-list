import React from 'react';

const GroceryItem = (props) => (

  <li>
    <span>{props.name}</span>
    <span>{props.quantity}</span>
  </li>

);

export default GroceryItem;