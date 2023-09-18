import LangSelector from './Header.LangSelector'
import Title from './Header.Title'

function Header ({ t }) {
  return (
    <header className='container mb-5'>
      <nav>
        <LangSelector />
        {/* <Dropdown className="float-end">
          <Dropdown.Toggle variant="link" id="dropdown-basic">
            <FaGlobe size="1.5em" />
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {languages.map(({ code, name, countryCode }, i) => (
              <Dropdown.Item
                onClick={() => i18next.changeLanguage(code)}
                key={i}
                href="#/action-1"
              >
                <ReactCountryFlag
                  className="me-2"
                  countryCode={countryCode}
                  svg
                />
                {name}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown> */}
      </nav>
      <Title t={t} />
    </header>
  )
}

export default Header
