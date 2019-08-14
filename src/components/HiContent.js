import React, { Component } from 'react';

import './styles/HiContent.css';

class HiContent extends Component {

  render() {
    return (
      <div className="HiContent">
        <div className="HiContent__text">
            <div className="HiContent__text-title">
              I am <br/>
              a Developer <br/>
            </div>

            <h2 className="HiContent__text-subtitle">
              react website
            </h2>

            <span className="HiContent__text-extra">*Experience in react, node, django, angular, c#, java, api rest ...</span>
        </div>
      </div>
    );
  }

}

export default HiContent;
