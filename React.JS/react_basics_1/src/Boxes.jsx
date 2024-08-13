import React from 'react'
import Box from './Box'
import './Boxes.css';
function Boxes({n}) { 
    const boxes=[]
    for(let i=0;i<n;i++){
        boxes.push(<Box/>)
    }
    return (
        <div className='boxes'>{boxes}</div>
    );
    // return (
    // <div style={{ display: 'flex', flexWrap: 'wrap' }}>
    //         {Array.from({ length: n }).map((_, index) => (
    //             <Box key={index} />
    //         ))}
    //     </div>
    // );
}

export default Boxes