import React, { useState } from 'react'
import {v4 as uuid} from "uuid"
function EmojiClicker() {
  const [emojis,setEmojis]=useState([{id:uuid(),emoji:":("}]);
  const emojiList=[{id:uuid(),emoji:":)"},":-( ",":-) ", ":|" ];
  const addEmoji = ()=>{
    setEmojis((oldEmojis)=>[...oldEmojis,{id:uuid(),emoji:emojiList[Math.floor(Math.random()*emojiList.length)]}]);
  }
  const removeEmoji = (id)=>{
    return setEmojis(prevEmojis=>{
        return prevEmojis.filter(emoji=>emoji.id!==id)
    })
  }
  const convert = ()=>{
    setEmojis((prev)=>{
      return prev.map((p)=>{
        return {...p,emoji:"<3"}
      })
    })
  }
    return (
    <div className='m-2 p-2 bg-black gap-2'>
        <button onClick={addEmoji} className='mr-2 bg-red-500 p-1 rounded-lg'>
            Add Emoji
        </button>
        <button onClick={convert} className='mr-2 bg-red-500 p-1 rounded-lg'>
            Change All
        </button>
        <span >
            {emojis.map((e)=>{
                return <span onClick={()=>removeEmoji(e.id)} className='p-1 m-1 cursor-pointer' key={e.id}>{e.emoji}</span>
            })}
        </span>
    </div>
  )
}

export default EmojiClicker