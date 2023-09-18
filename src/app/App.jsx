import { useTranslation } from 'react-i18next'
import '../styles/App.css'

import Game from './components/page/Game_'
import Header from './components/layout/Header_'

// import { Container } from 'react-bootstrap'

const App = () => {
  const { t } = useTranslation()
  return (
    <>
      <Header t={t} />
      <Game t={t} />
    </>
  )
}

export default App
