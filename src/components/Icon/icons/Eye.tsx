import React from 'react';
import {Svg, Path} from 'react-native-svg';
import {IIcon} from '@models/IIconInterface';

export const Eye = ({color = '#000'}: IIcon) => (
  <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <Path
      d="M11.9841 5.25C8.33064 5.25 4.58298 7.36453 1.63267 11.5936C1.54846 11.7156 1.50231 11.8599 1.50006 12.0082C1.4978 12.1564 1.53955 12.302 1.62001 12.4266C3.88689 15.975 7.58439 18.75 11.9841 18.75C16.336 18.75 20.1094 15.9666 22.3805 12.4102C22.4591 12.2881 22.5009 12.1459 22.5009 12.0007C22.5009 11.8555 22.4591 11.7134 22.3805 11.5912C20.1042 8.07562 16.3031 5.25 11.9841 5.25Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M12 15.75C14.0711 15.75 15.75 14.0711 15.75 12C15.75 9.92893 14.0711 8.25 12 8.25C9.92893 8.25 8.25 9.92893 8.25 12C8.25 14.0711 9.92893 15.75 12 15.75Z"
      stroke={color}
      strokeMiterlimit="10"
    />
  </Svg>
);
