import { Alert } from 'react-bootstrap'
import { findOutWinner } from '../../utils/board.funcs'
// import { FaCheck, FaExclamation, FaSpinner } from 'react-icons/fa6'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

const Status = ({
  squares,
  // t,
  xIsNext,
  moves,
  action
}: {
  squares: any
  // t: any
  xIsNext: any
  moves: any
  action: any
}) => {
  const winner: any = findOutWinner(squares)
  const {t} = useTranslation()
  // console.log(squares.length)
  console.log('moves:', moves)
  const [alertMessage,setAlertMessage] = useState("")
  const displayAlertMessage = () => {
    setAlertMessage(t('noAvailableAction'))
    setTimeout(()=>(setAlertMessage("")),3000)
  }

  const status =
    winner !== null ? (
      <Alert
        title={t('actions.replay')}
        role='button'
        onClick={action}
        className='text-success'
        variant='success'
      >
        {/* <FaCheck className='pe-2' /> */}
        {t('status.winner')}: <strong>{winner.player}</strong>
      </Alert>
    ) : moves !== 9 ? (
      <Alert
        title={t('actions.noAvailableAction')}
        onClick={displayAlertMessage}
        className='text-center'
        variant='light'
      >
        {/* <FaSpinner className='me-2'/> */}
        {alertMessage? alertMessage : (`${t('status.nextPlayer')}: ${xIsNext ? 'X' : 'O'}`)}
      </Alert>
    ) : (
      <Alert
        title={t('actions.replay')}
        role='button'
        onClick={action}
        className='text-danger  '
        variant='danger'
      >
        {/* <FaExclamation className='pe-2' /> */}
        {t('status.noWinner')}
      </Alert>
    )

  return <div className='board__status'>{status}</div>
}

export default Status
