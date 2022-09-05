import React from 'react'

import Link from "next/link"

import IconButton from "@components/button/icon-button"

interface PropTypes {
  title: string,
  to: string,
  icon?: React.ReactNode
}

const ref = React.createRef<HTMLButtonElement>()

const HeaderLink = ({title, to, icon=null}: PropTypes) => {
  return (
    <Link href={to}><IconButton ref={ref} title={title} icon={icon} /></Link>
  )
}

export default HeaderLink