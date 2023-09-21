import { Dropdown } from 'react-bootstrap'
import { FaGlobe } from 'react-icons/fa6'
import { languages } from '../../../utils/languages'
import i18next from 'i18next'
import ReactCountryFlag from 'react-country-flag'

export default function LangSelector ({ currentLang }:{ currentLang:any }) {
  return (
    <Dropdown className='float-end'>
      <Dropdown.Toggle variant='link' id='dropdown-basic'>
        <FaGlobe size='1.5em' />
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {languages.map(({ code, name, countryCode }, i) => (
          <Dropdown.Item
            onClick={() => i18next.changeLanguage(code)}
            disabled={code === currentLang}
            key={i}
            href='#/action-1'
          >
            <ReactCountryFlag className='me-2' countryCode={countryCode} svg />
            {name}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  )
}
