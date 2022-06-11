import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import AppSettings from '../Pages/AppSettings/AppSettings';
import Dashboard from '../Pages/Dashboard/Dashboard';
import Notification from '../Pages/Notification/Notification';
import Project from '../Pages/Project/Project';
import Report from '../Pages/Report/Report';
const MainRoute = () => {
  return (
    <Routes>
      <Route exact path='/' element={<Dashboard />} />
      <Route exact path='/project' element={<Project />}></Route>
      <Route exact path='/report' element={<Report />}></Route>
      <Route exact path='/Notification' element={<Notification />}></Route>
      <Route exact path='/settings' element={<AppSettings />}></Route>
    </Routes>
  )
}

export default MainRoute