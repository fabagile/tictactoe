import { Container, Nav, Navbar } from 'react-bootstrap'
import LangSelector from './Header.LangSelector'
import LangSwitch from './Header.LangSwitch'
import { languages } from '../../../utils/languages'
import i18next from 'i18next'
// import Navlinks from "./Header.NavLinks";

function Header ({ t, bgColor }: { t:any, bgColor:any }) {
  const currentLang = i18next.resolvedLanguage

  return (
    <Navbar expand='xs' className={`bg-${bgColor}`}>
      <Container fluid='lg' className=''>
        <Navbar.Brand href='/'>{t('title')}</Navbar.Brand>
        {/* <Navbar.Toggle aria-controls='basic-navbar-nav' /> */}
        {/* <Navbar.Collapse id='basic-navbar-nav'> */}
        <Nav className='me-auto' />

        {languages.length > 2
          ? (
            <LangSelector currentLang={currentLang} />
            )
          : (
            <LangSwitch currentLang={currentLang} />
            )}
        {/* </Navbar.Collapse> */}
      </Container>
    </Navbar>
  )
}

export default Header
