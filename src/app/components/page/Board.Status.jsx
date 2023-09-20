import { findOutWinner } from '../../utils/board.funcs'

const Status = ({ squares, t, xIsNext }) => {
  const winner = findOutWinner(squares)
  
  const status = winner !==null 
    ? <span className='text-success'>{t('status.winner')}: <strong>{winner.player}</strong></span>
    : <span className=''>{t('status.nextPlayer')}: {xIsNext ? 'X' : 'O'}</span>

  return <div className='board__status'>{status}</div>
}

export default Status
