import { useTranslation } from 'react-i18next'
import { Container } from 'react-bootstrap'

import '../styles/App.css'

import Game from './components/Game_'
import Header from './layout/Header_'

const App = () => {
  const { t } = useTranslation()
  return (
    <Container fluid='xs'>
      <Header t={t} />
      <Game t={t} />
    </Container>
  )
}

export default App
