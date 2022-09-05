import Link from "next/link"

interface PropTypes {
  to: string,
  title: string,
  icon?: React.ReactNode,
  isActive: boolean
}

const NavpaneLink = ({ to, icon=null, title, isActive }: PropTypes) => {
  return (
    <Link href={to}>
      <button className={`w-full h-12 flex items-center px-8 ${isActive ? 'bg-slate-300' : 'bg-white'} active:bg-slate-300 py-3.5 hover:bg-slate-200 transition-all ease-in-out duration-150 rounded`}>
        {icon && <span className='w-5 mr-4'>{icon}</span>}
        <p className='text-base'>{title}</p>
      </button>
    </Link>
  )
}

export default NavpaneLink