import React from 'react';

function ShoppingList({ items }) {
  return (
    <ul>
      {items.map((item) => (
        <li style={{color:item.completed?"green":"gray"}} key={item.id}>
          {item.item.toString().toUpperCase()} - Quantity: {item.quantity} - Completed: {item.completed ? 'Yes' : 'No'}
        </li>
      ))}
    </ul>
  );
}

export default ShoppingList;
