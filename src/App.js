import { Suspense, useEffect, useState } from 'react';
import './App.css';
import Layouts from './Layouts/index'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";



function App() {
  return (
    <Layouts>
    <h1>running</h1>
    </Layouts>
  );
}

export default App;

