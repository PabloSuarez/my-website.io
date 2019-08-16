import React from 'react';

import './styles/WhoAmI.css';
import skyLineImage from '../images/skyline.jpg';

const WhoAmI = (props) => {
  return (
    <div className="WhoAmI" id="WhoAmI">
        <div className="WhoAmI__about">
            <h2 className="section__title">WHO AM I?</h2>

            <p>
              <strong>Hi I'm Pablo Suarez</strong> a experienced developer, 9 years of commercial
              experience working with clients from around the world 🌎,
              providing responsive front-end development and back-end integrations.
              <br/>
              Also have experience coding on .net, java, php and python environments.
            </p>

            <br/>
            <p>
              From <a href="https://www.descubrimontevideo.uy/" target="_blank">
                Montevideo
              </a>, <a href="https://en.wikipedia.org/wiki/Uruguay" target="_blank">
                Uruguay
              </a> born in 31/07/1991, I'm fan of football, travel, technology and photography.
            </p>

            <a href="https://turismo.gub.uy/index.php/en/places-to-go/south-central-region/cities/montevideo"
               target="_blank" className="WhoAmI__about-image">
                <img src={skyLineImage} alt="montevideo"/>
            </a>
        </div>
    </div>
  );
}

export default WhoAmI;
