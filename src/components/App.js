import React from 'react';

import './styles/App.css';

import NavBar from './NavBar';
import HiContent from './HiContent';
import WhoAmI from './WhoAmI';
import Experience from './Experience';

function App() {
  return (
    <div className="container__wrap">
        <div className="container__wrap-left">
            <NavBar/>
        </div>
        <div className="container__wrap-right">
            <HiContent/>
            <WhoAmI/>
            <Experience/>
        </div>
    </div>
  );
}

export default App;
