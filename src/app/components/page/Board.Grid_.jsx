import { useState } from 'react'

import { calculateWinner, calculateWinningLine } from '../../utils/board.funcs'

import Square from './Board.Grid.Square'

export default function Grid ({ squares, setSquares, xIsNext, setXIsNext }) {
  // states

  //   const [xIsNext, setXIsNext] = useState(true)
  // const [squares, setSquares] = useState(Array(9).fill(null))

  const winningLine = calculateWinningLine(squares)
  const fullLine = winningLine !== null
  // const grid =
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
    <div className='board__grid'>
      {squares.map((square, i) =>
        fullLine ? (
          winningLine.includes(i) ? (
            <Square
              color='text-success'
              value={square}
              onSquareClick={() => handleClick(i)}
            />
          ) : (
            <Square
              key={i}
              value={square}
              onSquareClick={() => handleClick(i)}
            />
          )
        ) : (
          <Square key={i} value={square} onSquareClick={() => handleClick(i)} />
        )
      )}
    </div>
  )
}
