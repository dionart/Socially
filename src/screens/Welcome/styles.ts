import {theme} from '../../config/theme';
import styled from 'styled-components/native';
import {
  Image,
  ImagePropsBase,
  ImageStyle,
  StyleProp,
  ViewStyle,
} from 'react-native';

export const Container = styled.ImageBackground.attrs({
  source: require('../../assets/images/bg.png'),
})`
  width: 100%;
  height: 100%;
  align-items: center;
  background-color: ${theme.grays.light};
`;

export const ButtonContainer = styled.View`
  position: absolute;
  right: -15%;
  bottom: -5%;
`;

export const Content = styled.View`
  align-items: center;
  margin-top: 130px;
`;
