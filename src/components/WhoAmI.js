import React from 'react';

import './styles/WhoAmI.css';

const WhoAmI = (props) => {
  return (
    <div className="WhoAmI">
        <div className="WhoAmI__about">
            <h2 className="section__title">WHO AM I?</h2>

            <p>
              <strong>Hi I'm Pablo Suarez</strong> a experienced developer, 9 years of commercial
              experience working with clients from around the world,
              providing responsive front-end development and back-end integrations.
            </p>

            <p>
              I also have experience coding on .net, java and python environments.
            </p>
        </div>
    </div>
  );
}

export default WhoAmI;
