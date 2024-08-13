import React from "react";

function Shopping_list({ items }) {
  return (
    <ul style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
      {items.map((i) => (
        <li
          key={i.id}
          style={{
            color: i.completed ? "grey" : "red",
            textDecoration: i.completed ? "line-through" : "none",
          }}
        >
          {i.item} - {i.quantity}
        </li>
      ))}
    </ul>
  );
}

export default Shopping_list;
