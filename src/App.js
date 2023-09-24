import React from "react";
import './App.css';
import {BrowserRouter} from 'react-router-dom';
import RootRoutes from './routes/root'

function App() {
  return (
    <BrowserRouter>
      <RootRoutes/>
    </BrowserRouter>
  );
}

export default App;
