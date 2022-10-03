import React from 'react'
import { NavLink } from 'react-router-dom';
import { Avatar } from 'antd';
import { Dropdown, Menu, Space } from 'antd';
import { useContext } from 'react';
import { AuthContext } from './Context';


function ModalProfile() {
  const {isAuth, setIsAuth} = useContext(AuthContext)
  function SignOut() {
    setIsAuth(false)
  }
  const menu = (
    <Menu
      items={[
        {
          label: <NavLink to="/profile">Your Profile</NavLink>,
          key: '0',
        },
        {
          type: 'divider',
        },
        {
          label: <NavLink to="/">Sign Out</NavLink>,
          key: '3',
          onClick: SignOut,
        },
      ]}
    />
  );
  return (
    <>
        <Dropdown overlay={menu} trigger={['click']}>
            <a onClick={(e) => e.preventDefault()}>
            <Space>
                <Avatar size={45}/>
            </Space>
            </a>
        </Dropdown>
    </>
  )
}

export default ModalProfile