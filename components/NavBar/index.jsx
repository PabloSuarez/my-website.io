import React, { Component } from 'react';

import './NavBar.css';

import ProfileImage from '../ProfileImage';
import profileImageUrl from '../../images/wall-bw-min.jpg';
import Link from 'next/link';

class NavBar extends Component {
  state = {
    isNavOpen: false,
  };

  handleOpenNav = (e) => {
    this.setState({ isNavOpen: !this.state.isNavOpen });
  };

  render() {
    return (
      <aside className={this.state.isNavOpen ? 'NavBar NavBar__open' : 'NavBar'}>
        <div className="NavBar__profile-image">
          <ProfileImage imageUrl={profileImageUrl} />
        </div>

        <div className="NavBar__profile-data">
          <h1 className="NavBar__profile-data-name">Suarez Pablo</h1>
          <span className="NavBar__profile-data-position">
            <a
              className="black-link"
              rel="noopener noreferrer"
              target="_blank"
              href="https://github.com/PabloSuarez"
            >
              Web/Developer
            </a>{' '}
            in Uruguay 🇺🇾
          </span>
        </div>

        <nav id="navbar" className="NavBar__menu">
          <ul>
            <li className="NavBar__menu-item active">
              <Link
                className="NavBar__menu-item-link"
                onClick={this.handleOpenNav}
                href="/#HiContent"
              >
                Home
              </Link>
            </li>
            <li className="NavBar__menu-item">
              <Link className="NavBar__menu-item-link" onClick={this.handleOpenNav} href="/#WhoAmI">
                About
              </Link>
            </li>
            <li className="NavBar__menu-item">
              <Link
                className="NavBar__menu-item-link"
                onClick={this.handleOpenNav}
                href="/#Experience"
              >
                Experience
              </Link>
            </li>
            <li className="NavBar__menu-item">
              <a
                className="NavBar__menu-item-link"
                onClick={this.handleOpenNav}
                href="https://github.com/PabloSuarez"
                rel="noopener noreferrer"
                target="_blank"
              >
                GitHub
              </a>
            </li>
            <li className="NavBar__menu-item">
              <a
                className="NavBar__menu-item-link"
                onClick={this.handleOpenNav}
                href="https://www.linkedin.com/in/pablosuarezdesarrolloy"
                rel="noopener noreferrer"
                target="_blank"
              >
                Linkedin
              </a>
            </li>
            <li className="NavBar__menu-item">
              <a
                className="NavBar__menu-item-link"
                onClick={this.handleOpenNav}
                href="mailto:pablo.suarez@gmail.com"
              >
                Contact
              </a>
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

        <div
          onClick={this.handleOpenNav}
          className={this.state.isNavOpen ? 'NavBar__cross NavBar__cross-open' : 'NavBar__cross'}
        >
          <i className="NavBar__cross-icons" />
        </div>
      </aside>
    );
  }
}

export default NavBar;
