import React from 'react';
import Image from 'next/image';

import './ProfileImage.module.scss';

const ProfileImage = ({ width = '30vh', height = '30vh' }) => {
  const profileImage = '/images/me-sm.jpg';

  return <Image src={profileImage} height={height} width={width} alt="profile" />;
};

export { ProfileImage };
