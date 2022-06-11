import React from 'react'
import styled from 'styled-components'
import { FaUserCircle } from 'react-icons/fa'

const NavBar = () => {
  return (
    <NavBarContainer>
      <h3>DashBord</h3>
      <UserIcon>
        <FaUserCircle />
        <span>User name</span>
      </UserIcon>
    </NavBarContainer>
  )
}

export default NavBar


const NavBarContainer = styled.div`
  width: 100%;
  height: auto;
  background-color: var(--primaryBackground);
  padding: 16px 24px;
  /* border-radius: 8px; */
  /* box-shadow: rgb(0 0 0 / 10%) 0rem 0.25rem 0.375rem -0.0625rem, rgb(0 0 0 / 6%) 0rem 0.125rem 0.25rem -0.0625rem; */
  box-shadow: rgb(188 178 178 / 10%) 0rem 0.25rem 0.375rem -0.0625rem, rgb(185 172 172 / 6%) 0rem 0.125rem 0.25rem -0.0625rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
 
`

const UserIcon = styled.div`
  color: var(--primary);
  font-size: 20px;
  display: flex;
  align-items: center;

  span{
    font-size: 14px;
    margin-left: 8px;
  }
`