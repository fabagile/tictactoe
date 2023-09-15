import { useState } from 'react'
import Board from './Board'
// import { useTranslation } from 'react-i18next'

export default function Game ({ t }) {
  // const { t } = useTranslation()
  const [history, setHistory] = useState([Array(9).fill(null)])
  const [currentMove, setCurrentMove] = useState(0)
  const xIsNext = currentMove % 2 === 0
  const currentSquares = history[currentMove]

  const handlePlay = nextSquares => {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares]
    setHistory(nextHistory)
    setCurrentMove(nextHistory.length - 1)
  }
  function jumpTo (nextMove) {
    setCurrentMove(nextMove)
  }

  const moves = history.map((move, i) => {
    let description
    if (i > 0) {
      description = `${t('description_move')}${i + 1}`
    } else {
      description = t('description_start')
    }
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    )
  })

  return (
    <div className='game'>
      <div className='game-board'>
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} t={t} />
      </div>
      <div className='game-info'>
        <ol>{moves}</ol>
      </div>
    </div>
  )
}
