import {theme} from '../../config/theme';
import styled from 'styled-components/native';

export const Container = styled.ImageBackground.attrs({
  source: require('../../assets/images/bg.png'),
})`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  background-color: ${theme.grays.light};
`;

export const ButtonContainer = styled.View`
  position: absolute;
  right: -15%;
  bottom: -5%;
`;
