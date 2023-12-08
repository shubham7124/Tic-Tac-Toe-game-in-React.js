import React from 'react'
import './scoreboard.css'
export default function Scoreboard({xScore, oScore,plying}) {
  return (
    <div className='ScoreBoard'>
     
      <span className={`x-score ${plying === true ? "xplay":""}`}>X-{xScore}</span>
      <span className={`o-score ${plying === false ? "oplay":""}`}>O-{ oScore}</span>
   
    </div>
  )
}
