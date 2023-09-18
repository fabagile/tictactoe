import { calculateWinner } from "../../utils/game.board.funcs"

const Status = ({ squares, t, xIsNext }) => {
  const winner = calculateWinner(squares)
  const status = winner
    ? `${t('statusWinner')}: ${winner}`
    : `${t('statusNextPlayer')}: ${xIsNext ? 'X' : 'O'}`

  return <div className="text-justify">{status}</div>
}

export default Status
