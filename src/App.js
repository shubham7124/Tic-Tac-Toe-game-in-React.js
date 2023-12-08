
import { useState } from 'react';
import './App.css';
import Board from './Component/Bord/Board';
import Scoreboard from './Component/ScoreBord/Scoreboard';

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xPlaying, setXplayer] = useState(true);
  const [xScore, setXScore] = useState(0);
  const [oScore, setOScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [tie, setTie] = useState(0);

  const win_condition = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]

  const reset = () => {
    setGameOver(false)
    setBoard(Array(9).fill(null));

  }
  const restartGame = () => {
    setGameOver(false)
    setBoard(Array(9).fill(null))
    setXScore(0)
    setOScore(0)
    setTie(0)
  }




  const handleBoxClick = (boxId) => {
    const updatedBoard = board.map((value, id) => {
      if (id === boxId) {
        return xPlaying === true ? "x" : "o";
      }
      else {
        return value
      }
    })

    setBoard(updatedBoard);
    setXplayer(!xPlaying);
    const winner = checkWinner(updatedBoard);
    if (winner) {
      if (winner == "x") {
        setXScore(xScore + 1);
        setGameOver(true);

      }
      else {
        setOScore(oScore + 1);
        setGameOver(true);

        // setTimeout)

      }
    }
    let filled = true;
    updatedBoard.map((item) => {
      if (item === null) {
        filled = false
      }
    })
    if (filled && winner !== "x" && winner !== "o") {
      // filled(true)
      // setTie(tie+1)
      // alert("All Block are Fill  click 'Clear' button")
       reset()
      setTie(tie + 1)
      
    }
  }

  const checkWinner = (updatedBoard) => {
    for (let i = 0; i < win_condition.length; i++) {
      const [x, y, z] = win_condition[i];  //[0,1,2]
      if (updatedBoard[x] &&
        updatedBoard[x] === updatedBoard[y] &&
        updatedBoard[y] === updatedBoard[z]) {
        console.log("Wiiner");
        return updatedBoard[x];


      }
    }
  }


  return (
    <div className="App" >
      <h1>Tic Toe Tik </h1>
      <Scoreboard xScore={xScore} oScore={oScore}  plying={xPlaying} />

      <Board board={board} onClick={gameOver === true ? reset : handleBoxClick} />

      <button className='restart' onClick={restartGame}>Restart Game</button>
      <button className='restart' onClick={reset}>clear and play</button>
    </div>
  );
}

export default App;
