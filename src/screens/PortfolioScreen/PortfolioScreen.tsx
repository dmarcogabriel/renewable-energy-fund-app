import React from 'react';
import {Text} from 'react-native-paper';
import {Header} from '@components/Header';
import {Container} from './PortfolioScreen.styles';

export const PortfolioScreen = () => (
  <>
    <Header title="Portfolio" />
    <Container>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
        ullamcorper, tortor vel blandit viverra, lectus leo luctus ipsum, id
        efficitur dolor magna id lectus. Nam vulputate, sem sed finibus
        vestibulum, ligula est feugiat metus, quis euismod enim metus in justo.
        Nulla facilisi. Fusce bibendum purus at nibh commodo, sit amet gravida
        sapien consequat. Nam eget sem euismod, commodo eros vitae, commodo
        augue. Pellentesque id est eu augue dignissim eleifend. Fusce imperdiet
        tellus a libero suscipit, quis sollicitudin metus commodo.
      </Text>
    </Container>
  </>
);
