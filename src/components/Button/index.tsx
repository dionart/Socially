import React from 'react';
import {ButtonShape, ButtonText, Container, ButtonInner} from './styles';

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
      <ButtonText>Next</ButtonText>
    </Container>
  );
};
