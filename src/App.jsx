import './styles/App.css'
import Game from './components/Game'
import Nav from './components/NavSelectLanguage'
import { useTranslation } from 'react-i18next'

const App = () => {
  const { t } = useTranslation()
  return (
    <>
      <Nav t={t} />
      <Game t={t} />
    </>
  )
}

export default App
