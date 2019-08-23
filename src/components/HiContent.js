import React, { Component } from 'react';

import profileImageUrl from '../images/profile-min.jpg';
import './styles/HiContent.css';

import ProfileImage from './ProfileImage';

class HiContent extends Component {

  render() {
    return (
      <section className="HiContent" id="HiContent">
        <div className="HiContent-bg">
          <div className="HiContent__text">

              <div className="HiContent__text-hello">
                <span className="HiContent__text-hello-text">Hello</span>
              </div>
              <div className="HiContent__text-title text-muted">
                I am <br/>
                a Developer <br/>
              </div>
          </div>

          <div className="HiContent__image">
              <ProfileImage imageUrl={profileImageUrl}/>
          </div>

          <a href="/#WhoAmI" className="next-page"></a>
        </div>
      </section>
    );
  }

}

export default HiContent;
