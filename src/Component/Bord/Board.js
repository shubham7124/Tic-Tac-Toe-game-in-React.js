import React from 'react'
import  './Board.css'
import Box from '../Box/Box'

export default function Board({board,onClick,id}) {
  return (
    <div className='borad'>
      {board.map((item,id)=>
        <Box id={id} value={item}  onClick={()=>item === null && onClick(id)}/>
      
      )}
    </div>
  )
}
