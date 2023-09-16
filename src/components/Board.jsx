// import { useTranslation } from 'react-i18next'
import { Col, Container, Row } from 'react-bootstrap'
import { calculateWinner } from '../utils/board.funcs'
import Square from './Square'

export default function Board ({ xIsNext, squares, onPlay, t }) {
  // const { t } = useTranslation()
  const handleClick = (i) => {
    if (squares[i] || calculateWinner(squares)) {
      return
    }
    const nextSquares = squares.slice()
    nextSquares[i] = xIsNext ? 'X' : 'O'
    onPlay(nextSquares)
  }

  const winner = calculateWinner(squares)
  let status
  if (winner) {
    status = `${t('status_winner')}: ${winner}`
  } else {
    status = `${t('status_next_player')}: ${xIsNext ? 'X' : 'O'}`
  }

  return (
    <>
      <div className='status'>{status}</div>
      <div className='board-row m-3 '>
        <Container className='mx-auto'>
          <Row className=' gap-0 justify-content-center'>
            {squares.map((square, i) => (
            <Col xs={4} key={i} className=''>
              <Square value={square} onSquareClick={() => handleClick(i)} />
            </Col>))}
          </Row>
        </Container>
      </div>
    </>
  )
}
