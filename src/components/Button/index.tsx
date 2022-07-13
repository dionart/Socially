import React from 'react';
import {
  ButtonShape,
  ButtonText,
  Container,
  ButtonInner,
  TextContainer,
} from './styles';
import Icon from 'react-native-vector-icons/Feather';
import {View} from 'react-native';

type ButtonProps = {
  text: string;
  icon: string;
};

export const Button: React.FC = () => {
  return (
    <Container>
      <ButtonShape>
        <ButtonInner />
      </ButtonShape>
      <TextContainer>
        <ButtonText marginRight={16}>Next</ButtonText>
        <Icon name="arrow-right" color="#fff" size={16} />
      </TextContainer>
    </Container>
  );
};
