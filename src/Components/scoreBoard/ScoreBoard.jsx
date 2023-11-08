import React from 'react'
import "./scoreboard.css"
function ScoreBoard({xScore,oScore,tie,playing}) {
  return (
    <div className='scoreboard'>
      <span className={`x-score ${playing === true ? "xplayer" : null}`}>X - {xScore} </span>
      <span className={`o-score ${playing === false ? "oplayer" : null}`}>O - {oScore} </span>
      <span className={`tie-score ${tie > 0 ? "otie" : ""}`}>Tie - {tie}  </span>
    </div>
  )
}

export default ScoreBoard
