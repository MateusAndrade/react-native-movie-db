import React, { FunctionComponent } from 'react';

import { Image } from 'react-native';

import { ILogoProps } from '../interfaces/logo';

const Logo = require('../../../assets/images/moviedb-logo-stacked.png');

const StackedLogo: FunctionComponent<ILogoProps> = ({
  height,
  width,
  resizeMode,
}) => {
  return <Image source={Logo} style={{ width, height, resizeMode }} />;
};

export default StackedLogo;
