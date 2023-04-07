import React from 'react';
import {Svg, Path} from 'react-native-svg';
import {IIcon} from '@models/IIconInterface';

export const ArrowBack = ({color = '#000'}: IIcon) => (
  <Svg width="18" height="16" viewBox="0 0 18 16" fill="none">
    <Path
      d="M7.293 15.707C7.4885 15.9025 7.744 16 8 16C8.256 16 8.5115 15.9025 8.707 15.707C9.0975 15.3165 9.0975 14.6835 8.707 14.293L3.414 9H17C17.552 9 18 8.552 18 8C18 7.448 17.552 7 17 7H3.414L8.707 1.707C9.0975 1.3165 9.0975 0.683497 8.707 0.292997C8.3165 -0.0975029 7.6835 -0.0975029 7.293 0.292997L0.292997 7.293C-0.0975029 7.6835 -0.0975029 8.3165 0.292997 8.707L7.293 15.707Z"
      fill={color}
    />
  </Svg>
);