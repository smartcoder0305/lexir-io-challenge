import { MouseEventHandler } from "react"
import React from 'react'

interface PropTypes {
  title: string,
  icon?: React.ReactNode,
  handleClick?: MouseEventHandler<HTMLButtonElement>
}

const IconButton = React.forwardRef<HTMLButtonElement, PropTypes>(({ title, icon=null, handleClick=()=>{} }: PropTypes, ref) => {
  return (
    <button ref={ref} className='h-full px-5 flex items-center hover:text-slate-400 cursor-pointer transition-all ease-in-out duration-150' onClick={handleClick}>
      { icon && <div className='mr-2.5'>{icon}</div> }
      <p className='text-sm'>{title}</p>
    </button>
  )
})

export default IconButton