import React, { useId } from 'react'
import './Box.css';

export default function Box({value,id,onClick}) {
  return (
    <div>
      <button key={id} className={`box ${value == "x"?"x":"o"}`} onClick={onClick} >{value}</button>
        
    </div>
  )
}
 