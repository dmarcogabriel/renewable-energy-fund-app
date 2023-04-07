import React from 'react';
import {IIcon} from '@models/IIconInterface';
import Icons from './icons';

interface IIconProps extends IIcon {
  name: keyof typeof Icons;
}

export const Icon = ({name, color}: IIconProps) => {
  const IconComponent = Icons[name];

  return <IconComponent color={color} />;
};
