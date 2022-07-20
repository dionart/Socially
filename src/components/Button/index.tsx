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
  icon?: string;
  onPress: () => void;
};

export const Button: React.FC<ButtonProps> = ({text, icon, onPress}) => {
  return (
    <Container onPress={onPress}>
      <ButtonShape>
        <ButtonInner />
      </ButtonShape>
      <TextContainer>
        <ButtonText marginRight={16}>{text}</ButtonText>
        {icon && <Icon name={icon} color="#fff" size={16} />}
      </TextContainer>
    </Container>
  );
};
