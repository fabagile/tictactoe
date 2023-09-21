import { useTranslation } from 'react-i18next'

import Header from './components/layout/Header_'
import Board from './components/page/Board_'
import Footer from './components/layout/Footer'

const App = () => {
  const bgColor = 'body-tertiary'
  const { t } = useTranslation()
  
  return (
    <>
      <Header bgColor={bgColor} t={t} />
      <main>
        <Board t={t} />
      </main>
      <Footer bgColor={bgColor} />
    </>
  )
}

export default App
