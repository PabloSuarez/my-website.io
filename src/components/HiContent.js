import React, { Component } from 'react';

import './styles/HiContent.css';

class HiContent extends Component {

  render() {
    return (
      <section className="HiContent" id="HiContent">
        <div className="HiContent__text">
            <div className="HiContent__text-title">
              I am <br/>
              a Developer <br/>
            </div>

            <h2 className="HiContent__text-subtitle">
              react website
            </h2>
        </div>
      </section>
    );
  }

}

export default HiContent;
