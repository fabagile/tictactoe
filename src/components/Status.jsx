import { calculateWinner } from '../utils/board.funcs'

const Status = ({squares, t, xIsNext}) => {
  const winner = calculateWinner(squares)
  let status = winner ? `${t('status_winner')}: ${winner}` : `${t('status_next_player')}: ${xIsNext ? 'X' : 'O'}`
  
  return (
    <div>{status}</div>
  )
}

export default Status