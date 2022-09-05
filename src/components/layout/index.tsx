import Header from './header'
import Footer from './footer'
import Navpane from './navpane'
import { PropsWithChildren } from 'react'

interface PropTypes extends PropsWithChildren {
  current: string
}

export default function Layout({ current, children } : PropTypes) {
  return (
    <div className='h-screen flex flex-col'>
      <Header />
      <div className='grow px-9 mt-28 py-10 flex items-start justify-between'>
        <Navpane current={current} />
        <div className='w-2/3'>{children}</div>
      </div>
      <Footer />
    </div>
  )
}