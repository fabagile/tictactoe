import { Alert } from 'react-bootstrap'
import { findOutWinner } from '../../utils/board.funcs'
import { FaCheck, FaExclamation, FaSpinner } from 'react-icons/fa6'

const Status = ({
  squares,
  t,
  xIsNext,
  moves
}: {
  squares: any
  t: any
  xIsNext: any
  moves: any
}) => {
  const winner: any = findOutWinner(squares)
  // console.log(squares.length)
  console.log('moves:', moves)

  const status =
    winner !== null ? (
      <Alert className='text-success' variant='success'>
        <FaCheck className='pe-2' />

        {t('status.winner')}: <strong>{winner.player}</strong>
      </Alert>
    ) : moves !== 9 ? (
      <Alert className='text-center' variant='light'>
        {/* <FaSpinner className='me-2'/> */}
        {t('status.nextPlayer')}: {xIsNext ? 'X' : 'O'}
      </Alert>
    ) : (
      <Alert className='text-danger  ' variant='danger'>
        <FaExclamation className='pe-2' />
        {t('status.noWinner')}</Alert>
    )

  return <div className='board__status'>{status}</div>
}

export default Status
