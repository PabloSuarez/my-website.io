import React, { Component } from 'react';

import './styles/NavBar.css';

import ProfileImage from './ProfileImage';
import profileImageUrl from '../images/profile.jpf';

class NavBar extends Component {

  render() {

    return (
      <aside className="NavBar">
        <div className="NavBar__profile-image">
            <ProfileImage imageUrl={profileImageUrl}/>
        </div>

        <div className="NavBar__profile-data">
            <h1 className="NavBar__profile-data-name">Suarez Pablo</h1>
            <span className="NavBar__profile-data-position">
                <a className="black-link" href="#">Web/Developer</a> in Uruguay 🇺🇾
            </span>
        </div>

        <nav id="navbar" className="NavBar__menu">
            <ul>
                <li className="NavBar__menu-item active">
                    <a className="NavBar__menu-item-link" href="/#HiContent">Home</a>
                </li>
                <li className="NavBar__menu-item">
                    <a className="NavBar__menu-item-link" href="/#WhoAmI">About</a>
                </li>
                <li className="NavBar__menu-item">
                    <a className="NavBar__menu-item-link" href="/#Experience">Experience</a>
                </li>

                {/*
                <li className="NavBar__menu-item">
                    <div data-nav-section="services">Services</div>
                </li>
                <li className="NavBar__menu-item">
                    <div data-nav-section="skills">Skills</div>
                </li>
                <li className="NavBar__menu-item">
                    <div data-nav-section="education">Education</div>
                </li>
                <li className="NavBar__menu-item">
                    <div data-nav-section="work">Work</div>
                </li>
                <li className="NavBar__menu-item">
                    <div data-nav-section="blog">Blog</div>
                </li>
                <li>
                    <div className="NavBar__menu-item" data-nav-section="contact">Contact</div>
                </li>
                */}
            </ul>
        </nav>
        <div className="NavBar__footer"></div>
      </aside>
    );
  }

}

export default NavBar;
