import './styles/App.css'
import Game from './components/Game'
import Header from './components/Header'
import { useTranslation } from 'react-i18next'
import { Container } from 'react-bootstrap'

const App = () => {
  const { t } = useTranslation()
  return (
    <Container>
      <Header t={t} />
      <Game t={t} />
    </Container>
  )
}

export default App
