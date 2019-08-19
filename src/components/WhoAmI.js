import React from 'react';

import './styles/WhoAmI.css';
import skyLineImage from '../images/skyline-bw-min.jpg';

const WhoAmI = (props) => {
  return (
    <section className="WhoAmI" id="WhoAmI">
        <div className="WhoAmI__about">
            <span className="section__name text-white">About</span>
            <h2 className="section__title">WHO AM I?</h2>

            <p>
              <strong>Hi I'm Pablo Suarez</strong> a experienced developer, 8 years of commercial
              experience working with clients from around the world 🌎,
              providing responsive front-end development and back-end integrations.
              <br/>
              Also experience coding on .net, java, php and python environments.
            </p>

            <br/>
            <p>
              From <a href="https://www.descubrimontevideo.uy/" target="_blank" rel="noopener noreferrer">
                Montevideo
              </a>, <a href="https://en.wikipedia.org/wiki/Uruguay" target="_blank" rel="noopener noreferrer">
                Uruguay
              </a> born in 31/07/1991, I'm fan of football, travel, technology and photography.
            </p>

            <a href="https://turismo.gub.uy/index.php/en/places-to-go/south-central-region/cities/montevideo"
               target="_blank" className="WhoAmI__about-image" rel="noopener noreferrer">
                <img src={skyLineImage} alt="montevideo"/>
            </a>
        </div>
    </section>
  );
}

export default WhoAmI;
