import React from 'react';

import {ButtonContainer, Container} from './styles';
import HeroSVG from '../../assets/images/hero.svg';
import {Text} from '../../components/Text';

import {Button} from '../../components/Button';
import {View} from 'react-native';

const Login: React.FC = () => {
  return (
    <Container>
      <Text color="#4E4E4E" type="bodyRegular">
        Welcome to
      </Text>
      <Text align="center" type="title">
        Socially
      </Text>

      <HeroSVG />
      <ButtonContainer>
        <Button />
      </ButtonContainer>
    </Container>
  );
};

export default Login;
