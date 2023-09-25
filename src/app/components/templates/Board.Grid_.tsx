import { findOutWinner } from '../../utils/board.funcs'

import Square from './Board.Grid.Square'
// Impossible d'assigner le type 'Dispatch<SetStateAction<Number[]>>' au type 'Number[]'.

export default function Grid({
  squares,
  setSquares,
  xIsNext,
  setXIsNext,
  moves,
  setMoves
}: {
  squares: Number[]
  setSquares: any
  xIsNext: Boolean
  setXIsNext: any
  moves: any
  setMoves: any
}) {
  const winner = findOutWinner(squares)
  let fullLine: Number[]
  let player
  if (winner !== null) {
    fullLine = winner.line
    player = winner.player
  }

  function handleClick(i: any) {
    setMoves(moves += 1)
    if (squares[i] || findOutWinner(squares)) {
      return
    }
    const nextSquares: any = squares.slice()
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
      {squares.map((square: any, i) =>
        fullLine ? (
          winner!.line.includes(i) ? (
            <Square
              color='text-success'
              value={square}
              onSquareClick={() => handleClick(i)}
            />
          ) : (
            <Square
              key={i}
              color=''
              value={square}
              onSquareClick={() => handleClick(i)}
            />
          )
        ) : (
          <Square
            key={i}
            color=''
            value={square}
            onSquareClick={() => handleClick(i)}
          />
        )
      )}
    </div>
  )
}
