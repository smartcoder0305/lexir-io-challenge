// import React from 'react';

import Image from 'next/image'
// import Link from 'next/link';

import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';

// import IconButton from "@components/button/icon-button"
import HeaderLink from '@components/link/header-link';

const Header = () => {
  return (
    <div className='w-full h-28 px-9 flex items-center shadow-md fixed z-10 bg-white'>
      <div className='grow'>
        <Image src='/assets/img/logo.png' width={103} height={24} layout='fixed' alt='lexir logo' />
      </div>
      <div className='flex-none flex items-center h-full'>
        <HeaderLink to='/products' title='PRODUCTS' />
        <HeaderLink to='/brands' title='BRANDS' />
        <HeaderLink to='/signin' title='SIGN IN' icon={<AccountCircleOutlinedIcon />} />
        <HeaderLink to='/cart' title='CART' icon={<ShoppingBasketOutlinedIcon />} />
      </div>
    </div>
  )
}

export default Header