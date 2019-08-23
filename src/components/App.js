import React, { Component } from 'react';
// import socketIOClient from 'socket.io-client';

import './styles/App.css';

import NavBar from './NavBar/';
import HiContent from './HiContent';
import WhoAmI from './WhoAmI';
import Experience from './Experience';


class App extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     response: false,
  //     endpoint: 'http://suarezpablo.com:80'
  //   };
  // }
  //
  // componentDidMount() {
  //   const { endpoint } = this.state;
  //   const socket = socketIOClient(endpoint);
  //   socket.on('FromAPI', data => this.setState({ response: data }));
  // }

  render() {
    // const { response } = this.state;
    return (
      <div className="container__wrap">
          <div className="container__wrap-left">
              <NavBar/>
          </div>
          <div className="container__wrap-right">
              <HiContent/>
              <WhoAmI/>
              <Experience/>

              <a href="/#HiContent" className="go-top"></a>
          </div>

          {/*
          <div style={{display: 'none'}}>
            <div style={{ textAlign: "center" }}>
              <ul>
              {
                response && response.map(rep => {
                    return (
                      <li>{ rep.name }</li>
                    )
                })
              }
              </ul>
             </div>
          </div>
          */}
      </div>
    );
  }

}

export default App;
