import { useState } from 'react'

interface PropTypes {
  title: string,
  value?: string,
  editable?: boolean
}

const InputGroup = ({ title, value = '', editable = false }: PropTypes) => {
  const [ inputValue, setInputValue ] = useState(value)
  return (
    <div className='my-3'>
      <p className='mb-1'>{title}</p>
      {
        editable ?
          <input type='text' className='p-3 w-full outline-none border border-slate-200 focus:border-green-600 rounded transition-all duration-300' value={inputValue} onChange={e => setInputValue(e.target.value)} />
          :
          <p>{inputValue}</p>
      }
    </div>
  )
}

export default InputGroup