import React, { FC } from 'react';
import { Box, Flex, Heading } from '@chakra-ui/react';
import { RequiredChildren } from 'types';

import './Hero.module.scss';

interface HeroProps extends RequiredChildren {
  title: String;
}

const Hero: FC<HeroProps> = ({ title, children }) => (
  <Flex
    justifyContent="center"
    alignItems="center"
    flexDirection={'column'}
    bgGradient="linear(to-l, heroGradientStart, heroGradientEnd)"
    bgClip="text"
  >
    <Heading fontSize="6vw">{title}</Heading>
    <Box>{children}</Box>
  </Flex>
);

// const WelcomeHero = () => {
//   return (
//     <section className="HiContent" id="HiContent">
//       <div className="HiContent-bg">
//         <div className="HiContent__text">
//           <div className="HiContent__text-hello">
//             <span className="HiContent__text-hello-text">Hello</span>
//           </div>
//           <div className="HiContent__text-title">
//             I am <br />a Developer <br />
//           </div>
//         </div>

//         <div className="HiContent__image">
//           <ProfileImage />
//         </div>

//         <div href="/#WhoAmI" className="next-page" />
//       </div>
//     </section>
//   );
// };

export { Hero };
