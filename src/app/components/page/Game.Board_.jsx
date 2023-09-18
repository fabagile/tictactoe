// import { useTranslation } from 'react-i18next'
import { Col, Container, Row } from 'react-bootstrap'

import Square from './Game.Board.Square'
import Status from './Game.Board.Status'

import { calculateWinner } from '../../utils/game.board.funcs'
import { useState } from 'react'

export default function Board ({ t }) {
  
  // const [table, setTable] = useState(Array.from(Array(3)), ()=> new Array(3).fill(null))
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick(i) {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    const nextSquares = squares.slice();
    if (squares[i]) {
      return;
    }
    // const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = 'X';
    } else {
      nextSquares[i] = 'O';
    }
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }

  return (
    <div id='board'>
      <Status t={t} xIsNext={xIsNext} squares={squares} />
      <div className='board-row m-3 '>
        <Container className='mx-auto'>
          <Row className=' gap-0 justify-content-center'>
            {squares.map((square, i) => (
              <Col xs={4} key={i} className=''>
                <Square value={square} onSquareClick={() => handleClick(i)} />
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </div>
  )
}
