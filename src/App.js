import React from "react";
import './App.css';
import {BrowserRouter} from 'react-router-dom';
import RootRoutes from './routes/root';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fab, fas);

function App() {
  return (
    <BrowserRouter basename="/personal_project_fe">
      <RootRoutes/>
    </BrowserRouter>
  );
}

export default App;
