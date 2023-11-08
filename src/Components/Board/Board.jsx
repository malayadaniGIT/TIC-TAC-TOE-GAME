import React from 'react'
import "./board.css"
import Box from '../Box/Box'

function Board({board,onClick,id}) {
    return (
    <div className='board'>
   {board.map((item, id) => (
        <Box value={item}
        onClick={()=>item === null && onClick(id)}
    />
        ))}
        

    </div>
    )
}

export default Board
