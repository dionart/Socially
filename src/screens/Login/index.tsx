import React from 'react';

import {Container} from './styles';
import HeroSVG from '../../assets/images/hero.svg';
import {Text} from '../../components/Text';

const Login: React.FC = () => {
  return (
    <Container>
      <Text color="#4E4E4E" type="bodyRegular">
        Welcome to
      </Text>
      <Text type="title">Socially</Text>
      <HeroSVG />
    </Container>
  );
};

export default Login;
