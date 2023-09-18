import { calculateWinner } from '../../utils/board.funcs'

const Status = ({ squares, t, xIsNext }) => {
  const winner = calculateWinner(squares)
  const status = winner
    ? `${t('statusWinner')}: ${winner}`
    : `${t('statusNextPlayer')}: ${xIsNext ? 'X' : 'O'}`

  return <div>{status}</div>
}

export default Status
