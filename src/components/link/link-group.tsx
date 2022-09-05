import Link from "next/link"

interface LinkItem {
  to: string,
  text: string
}

interface PropTypes {
  title: string,
  links: Array<LinkItem>
}

const LinkGroup = ({ title, links }: PropTypes) => {
  return (
    <div className='flex flex-col items-start'>
      <p className='text-[#8f8f8f] text-base mb-1.5'>{title.toUpperCase()}</p>
      {
        links.map((link: any) => 
          <Link key={link.text} href={link.to}><a className='text-white text-base my-1.5'>{link.text}</a></Link>
        )
      }
    </div>
  )
}

export default LinkGroup