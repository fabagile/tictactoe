import React from 'react'
import { useTranslation } from 'react-i18next'

const Link = ({ children, route, tooltip, blank }:{ children:any, route:any, tooltip:any, blank:any }) => {
  const { t } = useTranslation()
  return (
    <>
      {blank
        ? (
          <a href={route} rel='noreferrer' target='_blank' title={t(tooltip)}>
            {children}
          </a>
          )
        : (
          <a href={route} title={t(tooltip)}>
            {children}
          </a>
          )}{' '}
    </>
  )
}

export default Link
