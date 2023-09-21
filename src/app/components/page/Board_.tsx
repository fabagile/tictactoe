// import { useTranslation } from 'react-i18next'

import Grid from './Board.Grid_'
import Status from './Board.Status'

import { useState } from 'react'
import { Button } from 'react-bootstrap'

export default function Board ({ t }: { t: Function }) {
  // states
  const [xIsNext, setXIsNext] = useState<Boolean>(true)
  const [squares, setSquares] = useState<Number[]>(Array(9).fill(null))
  const [moves, setMoves] = useState<Number>(0)

  function replay () {
    setXIsNext(true)
    setSquares(Array(9).fill(null))
    setMoves(0)
  }

  return (
    <div className='board' id='board'>
      <Grid
        squares={squares}
        setSquares={setSquares}
        xIsNext={xIsNext}
        setXIsNext={setXIsNext}
        moves={moves}
        setMoves={setMoves}
      />

      <Status t={t} xIsNext={xIsNext} squares={squares} moves={moves} />
      <div className='board__actions d-grid'>
        <Button onClick={replay} variant='primary'>
          {t('replay')}
        </Button>
      </div>
    </div>
  )
}
