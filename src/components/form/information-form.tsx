import React, { PropsWithChildren, useState } from 'react'

import IconButton from '@components/button/icon-button'
import InputGroup from '@components/input/input-group'

import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';

interface ElementPropTypes {
  title: string,
  value: string,
  editable: boolean
}

interface PropTypes extends PropsWithChildren {
  editable?: boolean,
  title: string,
  itemsPerCol?: number,
  elements?: Array<ElementPropTypes>
}

const InformationForm = ({ editable=false, title, itemsPerCol=1, elements=[], children }: PropTypes) => {
  const [isEditable, setIsEditable] = useState(false)
  return (
    <>
      <div className='flex mb-7'>
        <p className='grow text-2xl text-bold'>{title}</p>
        { editable && <IconButton title={isEditable ? 'Save' : 'Edit'} icon={isEditable ? <SaveOutlinedIcon /> : <EditOutlinedIcon />} handleClick={() => setIsEditable(!isEditable)} />}
      </div>
      <div className='grid gap-4 mb-10' style={{gridTemplateColumns: `repeat(${itemsPerCol}, minmax(0, 1fr))`}}>
        {
          elements.map((element: ElementPropTypes) => 
            <InputGroup key={element.title} title={element.title} value={element.value} editable={editable ? isEditable : element.editable} />
          )
        }
        {children}
      </div>
    </>
  )
}

export default InformationForm