import React, { PropsWithChildren, useRef, useState } from 'react'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const FileUpload = ({ children }: PropsWithChildren) => {
  const [ currentFile, setCurrentFile ] = useState({
    name: ''
  })  //We can set its type array so that we can upload multiple files
  const fileController = useRef<HTMLInputElement>(null)
  const handleClick = () => {
    if(fileController.current) {
      fileController.current.click()
    }
  }
  const onFileChangeCapture = (e: React.ChangeEvent<HTMLInputElement>) => {
    if(e.currentTarget.files) {
      setCurrentFile(e.currentTarget.files[0])
    }
  }
  return (
    <div className='p-5 border border-slate-200 rounded hover:bg-slate-200 transition-all ease-in-out duration-200 cursor-pointer flex flex-col items-center' onClick={handleClick}>
      {children}
      {currentFile?.name && <div className='flex items-center'><p className='mr-2'>{currentFile.name}</p><CheckCircleOutlineIcon sx={{color: 'green'}} /></div>}
      <input type='file' hidden ref={fileController} onChangeCapture={onFileChangeCapture} accept='.pdf' />
    </div>
  )
}

export default FileUpload