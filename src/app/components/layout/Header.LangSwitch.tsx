import i18next from 'i18next'
import { languages } from '../../../utils/languages'
import ReactCountryFlag from 'react-country-flag'
import { useState } from 'react'

export default function LangSwitch({ currentLang }: { currentLang: any }) {
  const flagStyle = (code: any) => ({
    fontSize: code === currentLang ? '2.0em' : '1.5em',
    order: code !== currentLang ? 1 : 0,
    filter: code !== currentLang ? "grayscale(50%)" : "grayscale(0)"
  })
  return (
    <>
      {languages.map(({ code, name, countryCode }, i) => (
        <ReactCountryFlag
          key={i}
          onClick={() => i18next.changeLanguage(code)}
          style={flagStyle(code)}
          className='me-2 '
          countryCode={countryCode}
          svg
        />
      ))}
    </>
  )
}
