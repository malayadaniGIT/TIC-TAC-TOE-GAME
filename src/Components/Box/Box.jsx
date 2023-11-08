import React from 'react'
import "./box.css"

function Box({value,key,onClick}) {
  return (
        <button  className={`box ${value === "X" ? "xcolor" : "ocolor"}`} onClick={onClick}>{value}</button>
    )
}

export default Box
