import Image from 'next/image'
import Link from 'next/link';

import { footerLinks } from '../../info.json'

import LinkGroup from '@components/link/link-group'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FaceBookIcon from '@mui/icons-material/FaceBook';

const Footer = () => {
  return (
    <div className='w-full py-11 px-9 flex flex-col bg-[#2d2d2d]'>
      <div className='flex items-start justify-between'>
        <Image src='/assets/img/logo-white.png' width={106} height={24} layout='fixed' alt='lexir logo' />
        {
          footerLinks.map(({title, links}) => 
            <LinkGroup key={title} title={title} links={links} />
          )
        }
        <div className='flex'>
          {/** Medium Icon */}
          <a href='https://www.linkedin.com/company/lexir' className='m-1' target='_blank'><Image src='/assets/img/medium-logo.png' width={18} height={18} /></a>
          <a href='https://www.linkedin.com/company/lexir' target='_blank'><FaceBookIcon sx={{color: 'white', bgColor: 'white'}} /></a>
          <a href='https://www.linkedin.com/company/lexir' target='_blank'><InstagramIcon sx={{color: 'white', bgColor: 'white'}} /></a>
          <a href='https://www.linkedin.com/company/lexir' target='_blank'><LinkedInIcon sx={{color: 'white', bgColor: 'black'}} /></a>
        </div>
      </div>
      <div className='border-t border-slate-200 mt-2 pt-2 flex'>
        <div className='grow'>
          <p className='text-base text-white'>{`Ⓒ ${new Date().getFullYear()} Lexir Inc.`}</p>
        </div>
        <div className='flex-none flex'>
          <Link href='/privacy'><a className='text-base text-white mr-16'>Privacy</a></Link>
          <Link href='/terms-of-service'><p className='text-base text-white'>Terms of service</p></Link>
        </div>
      </div>
    </div>
  )
}

export default Footer