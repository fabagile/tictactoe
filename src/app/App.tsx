import { useTranslation } from 'react-i18next'

import Header from './components/layout/Header_'
import Board from './components/templates/Board_'
import Footer from './components/layout/Footer'
import Home from './routes'

const App = () => {
  const bgColor = 'body-tertiary'
  const { t } = useTranslation()
  
  return (
    <>
      <Header bgColor={bgColor} />
      <main>
        <Home />
      </main>
      <Footer bgColor={bgColor} />
    </>
  )
}

export default App
