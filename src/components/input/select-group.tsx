import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import React, { useState, useEffect, useRef } from 'react'

interface PropTypes {
  title: string,
  width: number,
  options: Array<React.ReactNode>
}

const SelectGroup = ({ title, width, options }: PropTypes) => {

  const [ showOptions, setShowOptions ] = useState<boolean>(false)
  const [ selectedIndex, setSelectedIndex ] = useState(0)
  const optionList = useRef<HTMLDivElement>(null)

  const handleMouseLClick = (e: MouseEvent) => {
    if(optionList.current) {
      if(!optionList.current.contains(e!.target as Node)) {
        setShowOptions(false)
      }
    }
  }

  useEffect(() => {
    window.addEventListener('click', handleMouseLClick)

    return () => window.removeEventListener('click', handleMouseLClick)
  }, [])

  return (
    <div className='my-3'>
      <p className='mb-1'>{title}</p>
      <div className='flex'>
        <div className='flex-none outline-none border border-slate-200 rounded-l cursor-pointer hover:bg-slate-200 focus:border-green-600 transition-all duration-300' ref={optionList}>
          <div className='h-full p-3 flex justify-center items-center' style={{width: `${width}px`}} onClick={() => setShowOptions(!showOptions)}>
            <div className='mr-1 grow flex justify-center items-center'>{options.length ? options[selectedIndex] : null}</div><KeyboardArrowDownOutlinedIcon className='flex-none' />
          </div>
          {
            showOptions &&
            <div className='relative bg-white'>
              <ul className='absolute'>
                {
                  options.map((option: React.ReactNode, index: number) => 
                    <li key={index.toString()} className='border border-slate-200 text-center py-2 bg-white hover:bg-slate-200 flex justify-center items-center focus:border-green-600 transition-all duration-300' style={{width: `${width}px`}} onClick={() => {setSelectedIndex(index), setShowOptions(false)}}>{option}</li>
                  )
                }
              </ul>
            </div>
          }
        </div>
        <input type='text' placeholder='Contact Number' className='grow p-3 outline-none border border-slate-200 rounded-r focus:border-green-600 transition-all duration-300' />
      </div>
    </div>
  )
}

export default SelectGroup