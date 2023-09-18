// import { useTranslation } from 'react-i18next'

import Square from './Board.Square'
import Status from './Board.Status'

import { calculateWinner } from '../../utils/board.funcs'
import { useState } from 'react'

export default function Board ({ t }) {
  // const [table, setTable] = useState(Array.from(Array(3)), ()=> new Array(3).fill(null))
  const [xIsNext, setXIsNext] = useState(true)
  const [squares, setSquares] = useState(Array(9).fill(null))

  function handleClick (i) {
    if (squares[i] || calculateWinner(squares)) {
      return
    }
    const nextSquares = squares.slice()
    if (squares[i]) {
      return
    }

    if (xIsNext) {
      nextSquares[i] = 'X'
    } else {
      nextSquares[i] = 'O'
    }
    setSquares(nextSquares)
    setXIsNext(!xIsNext)
  }

  return (
    <div id='board'>
      <Status t={t} xIsNext={xIsNext} squares={squares} />
      <div className='board-row m-3 justify-content-center'>
        {squares.map((square, i) => (
          <Square key={i} value={square} onSquareClick={() => handleClick(i)} />
        ))}
      </div>
    </div>
  )
}
