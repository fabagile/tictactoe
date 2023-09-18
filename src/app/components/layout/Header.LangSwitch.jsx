import i18next from 'i18next'
import { languages } from '../../../utils/languages'
import ReactCountryFlag from 'react-country-flag'

export default function LangSwitch ({ currentLang }) {
  return (
    <>
      {languages.map(({ code, name, countryCode }, i) => (
        <ReactCountryFlag
          key={i}
          onClick={() => i18next.changeLanguage(code)}
          style={{
            fontSize: code === currentLang ? '2.0em' : '1.5em'
          }}
          className='me-2'
          countryCode={countryCode}
          svg
        />
      ))}
    </>
  )
}
