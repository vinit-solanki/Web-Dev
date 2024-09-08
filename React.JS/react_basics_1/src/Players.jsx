import React from 'react'
import Player from './Player'

function Players({num_of_players=5,target}) {
    const players= Array(num_of_players).fill({})
    return (
        <div className='w-full text-black justify-center align-center'>
        <Player/>
        </div>
    )
}

export default Players