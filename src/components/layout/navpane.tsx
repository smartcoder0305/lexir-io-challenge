import NavpaneLink from "@components/link/navpane-link"
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';

interface PropTypes {
  current: string
}

const navpaneLinks = [
  {
    to: '/myaccount',
    title: 'Account',
    icon: <SettingsOutlinedIcon />
  },
  {
    to: '/orders',
    title: 'Orders',
    icon: <ShoppingBasketOutlinedIcon />
  },
  {
    to: '/address',
    title: 'Address',
    icon: <LocationOnOutlinedIcon />
  },
  {
    to: '/help-center',
    title: 'Help Center',
    icon: <HelpOutlineOutlinedIcon />
  },
  {
    to: '/logout',
    title: 'Logout',
    icon: <ExitToAppOutlinedIcon />
  }
]

const Navpane = ({current}: PropTypes) => {
  return (
    <div className='w-1/4'>
      {
        navpaneLinks.map((navpaneLink) => 
          <NavpaneLink key={navpaneLink.title} to={navpaneLink.to} title={navpaneLink.title} icon={navpaneLink.icon} isActive={current === navpaneLink.to} />
        )
      }
    </div>
  )
}

export default Navpane