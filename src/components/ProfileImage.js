import React from 'react';

import './styles/ProfileImage.css';

const ProfileImage = (props) => {
  return (
    <div className="ProfileImage" style={{ 'backgroundImage': `url(${props.imageUrl})` }}>
        <img src={props.imageUrl} alt="profile" />
    </div>
  );
}

export default ProfileImage;
