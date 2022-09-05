import Image from 'next/image'

import Layout from '@components/layout'
import InformationForm from '@components/form/information-form'
import FileUpload from '@components/button/file-upload'
import SelectGroup from '@components/input/select-group';

import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';

export default function MyAccount() {

  return (
    <Layout current='/myaccount'>
      <InformationForm title='Account Information' editable elements={[
        {
          title: 'Email',
          value: 'jlavesdesousa@lupum.com',
          editable: false
        },
        {
          title: 'Password',
          value: '*********************',
          editable: false
        }
      ]}
      />
      <InformationForm title='Personal Information' itemsPerCol={2} elements={[
        {
          title: 'First Name',
          value: 'Leandro',
          editable: true
        },
        {
          title: 'Last Name',
          value: '',
          editable: true
        }
      ]}
      >
        <SelectGroup title='Phone Number' width={100} options={[
          <Image src='/assets/img/pt-flag.png' width={40} height={20} />,
          <Image src='/assets/img/logo.png' width={40} height={20} />,
          <Image src='/assets/img/pt-flag.png' width={40} height={20} />,
          <Image src='/assets/img/logo.png' width={40} height={20} />,
          <Image src='/assets/img/pt-flag.png' width={40} height={20} />,
          <Image src='/assets/img/logo.png' width={40} height={20} />,
          <Image src='/assets/img/pt-flag.png' width={40} height={20} />,
          <Image src='/assets/img/logo.png' width={40} height={20} />,
          <Image src='/assets/img/pt-flag.png' width={40} height={20} />,
        ]} />
      </InformationForm>
      <InformationForm title='Company Information' itemsPerCol={2} elements={[
        {
          title: 'Business Name',
          value: 'Lupum',
          editable: false
        },
        {
          title: 'Company Address',
          value: 'Agras Street 8798, 4000-458 Porto, Portugal',
          editable: true
        },
        {
          title: 'Company Email',
          value: 'jlavesdesousa@lupum.com',
          editable: true
        },
        {
          title: 'Phone Number',
          value: '+325 889 565 214',
          editable: true
        },
        {
          title: 'Company Number',
          value: '1256369988',
          editable: true
        },
      ]} />
      <InformationForm title='Business Registration Document'>
        <p className='text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        <FileUpload>
          <div className='w-full flex flex-col items-center'>
            <FileDownloadOutlinedIcon />
            <p className='text-bold'>Drag and drop files here to upload</p>
            <p className='text-slate-600'>Only PDF files accepted</p>
          </div>
        </FileUpload>
      </InformationForm>
    </Layout>
  )
}