import React from 'react';
import {Svg, Path} from 'react-native-svg';
import {IIcon} from '@models/IIconInterface';

export const Trade = ({color = '#000'}: IIcon) => (
  <Svg width="19" height="20" viewBox="0 0 19 20" fill="none">
    <Path
      d="M13.55 10L18.5 14.95L13.55 19.9L12.136 18.486L14.672 15.949L1.5 15.95V13.95H14.672L12.136 11.414L13.55 10ZM5.45 0L6.864 1.414L4.328 3.95H17.5V5.95H4.328L6.864 8.486L5.45 9.9L0.5 4.95L5.45 0Z"
      fill={color}
    />
  </Svg>
);
