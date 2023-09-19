import { calculateWinner } from '../../utils/board.funcs'

const Status = ({ squares, t, xIsNext }) => {
  const winner = calculateWinner(squares)
  const status = winner
    ? `${t('status.winner')}: ${winner}`
    : `${t('status.nextPlayer')}: ${xIsNext ? 'X' : 'O'}`

  return <div className='board__status'>{status}</div>
}

export default Status
