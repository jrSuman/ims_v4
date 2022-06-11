import React from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';
import SideBar from '../Components/UI/SideBar';
import Dashboard from '../Pages/Dashboard'
// import { Route } from 'react-router-dom';

const PublicRoute = ({ component: Component }) => {

  console.log('compoentnt', Component);
  return (
    <>
      <SideBar ></SideBar>
        <MainContainer render={(props) => <Component {...props} />}>
      </MainContainer>
    </>
  )
}

export default PublicRoute;

const MainContainer = styled.div`
  width: 1000px;
  height: 100vh;
  background-color: red;
`