import React from 'react'
import { Button } from 'antd';
import { NavLink, Outlet} from 'react-router-dom';
import ModalProfile from '../ModalProfile'

function Navbar() {
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  return (
    <>
        <div className='py-10 px-10 flex justify-end'>
            <NavLink to = "/">
              <Button size='large' type="primary" className='mr-5 mt-1'>User List</Button>
            </NavLink>
            <ModalProfile />
            <Outlet />
        </div>
    </>
  )
}

export default Navbar