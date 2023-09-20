import { findOutWinner } from '../../utils/board.funcs'

import Square from './Board.Grid.Square'

export default function Grid ({ squares, setSquares, xIsNext, setXIsNext }) {
  const winner = findOutWinner(squares)
  let fullLine
  let player
  if (winner !== null ) {
    fullLine = winner.line
    player = winner.player
    console.log(fullLine, player)
  }

  // winner !==null && console.log(winner)
  // const winningLine = calculateWinningLine(squares)
  // const fullLine = winner !== null
  // winner != null && console.log(winner.line)
  
  function handleClick (i) {
    if (squares[i] || findOutWinner(squares)) {
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
        fullLine
          ? (
              winner.line.includes(i)
                ? (
                  <Square
                    color='text-success'
                    value={square}
                    onSquareClick={() => handleClick(i)}
                  />
                  )
                : (
                  <Square
                    key={i}
                    value={square}
                    onSquareClick={() => handleClick(i)}
                  />
                  )
            )
          : (
            <Square key={i} value={square} onSquareClick={() => handleClick(i)} />
            )
      )}
    </div>
  )
}
