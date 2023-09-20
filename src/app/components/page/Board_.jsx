// import { useTranslation } from 'react-i18next'

import Grid from './Board.Grid_'
import Status from './Board.Status'

import { useState } from 'react'
import { Button } from 'react-bootstrap'

export default function Board ({ t }) {

  // states
  const [xIsNext, setXIsNext] = useState(true)
  const [squares, setSquares] = useState(Array(9).fill(null))

  function replay () {
    setXIsNext(true)
    setSquares(Array(9).fill(null))
  }

  return (
    <div className='board' id='board'>
      <Status t={t} xIsNext={xIsNext} squares={squares} />

      <Grid squares={squares} setSquares={setSquares} xIsNext={xIsNext} setXIsNext={setXIsNext} />

      <Button onClick={replay} color='info'>
        {t('replay')}
      </Button>
    </div>
  )
}
