// import { useTranslation } from "react-i18next"

const History = ({ setCurrentMove, history, t }) => {
  // const { t } = useTranslation()
  function jumpTo (nextMove) {
    setCurrentMove(nextMove)
  }
  const moves = history.map((move, i) => {
    let description
    if (i > 0) {
      description = `${t('descriptionMove')}${i + 1}`
    } else {
      description = t('descriptionStart')
    }
    return (
      <li key={move}>
        <div className='my-1' variant='info' onClick={() => jumpTo(move)}>
          {description}
        </div>
      </li>
    )
  })
  return (
    <div id='history' className=''>
      <ol>{moves}</ol>
    </div>
  )
}

export default History
