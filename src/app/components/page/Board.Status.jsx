import { calculateWinner } from '../../utils/board.funcs'

const Status = ({ squares, t, xIsNext }) => {
  const winner = calculateWinner(squares)
  const status = winner
    ? <span className='text-success' >{t('status.winner')}: <strong>{winner}</strong></span>
    : <span className='' >{t('status.nextPlayer')}: {xIsNext ? 'X' : 'O'}</span>

  return <div className='board_status' >{status}</div>
}

export default Status
