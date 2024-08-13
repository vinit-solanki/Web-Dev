import React from 'react'
// import PropTypes from 'prop-types';
function Property({details}) {
  return (
    <div style={{backgroundColor:"black", display:"flex", gap:"1.5rem", padding:"1rem"}}>
    {
        details.map(p=>{
            return <div style={{display:"flex", flexDirection:"column", justifyContent:"center", backgroundColor:"gray", padding:"1.2rem", color:"black", borderRadius:"1rem"}}>
                <h3>Location: {p.name}</h3>
                <h3>Price: {p.price}</h3>
                <h3>Rating: ⭐{p.rating}</h3>
                <h4>ID: {p.id}</h4>
            </div>
        })
    }
    </div>
  )
}
// Propert.PropTypes={
//     name:PropTypes.string,
//     price:PropTypes.number,
//     rating:PropTypes.number,
//     id:PropTypes.number,
// }
export default Property;