import { useTranslation } from 'react-i18next'
import '../styles/App.css'

import Header from './components/layout/Header_'
import Board from './components/page/Board_'

const App = () => {
  const { t } = useTranslation()
  return (
    <>
      <Header t={t} />
      <Board t={t} />
    </>
  )
}

export default App
