import React from 'react';
import {IIcon} from '@models/IIconInterface';
import Icons from './icons';

export type IIconName = keyof typeof Icons;

interface IIconProps extends IIcon {
  name: IIconName;
}

export const Icon = ({name, color}: IIconProps) => {
  const IconComponent = Icons[name];

  return <IconComponent color={color} />;
};
