import { findOutWinner } from '../../utils/board.funcs'

const Status = ({ squares, t, xIsNext, moves }: { squares: any, t: any, xIsNext: any, moves: any }) => {
  const winner: any = findOutWinner(squares)
  // console.log(squares.length)
  console.log("moves:", moves)

  const status = winner !== null
    ? <span className='text-success'>{t('status.winner')}: <strong>{winner.player}</strong></span>
    : moves !== 9 ? (<span className=''>{t('status.nextPlayer')}: {xIsNext ? 'X' : 'O'}</span>) : (<span className='text-warning'>{t('status.noWinner')}</span>)

  return <div className='board__status'>{status}</div>
}

export default Status
