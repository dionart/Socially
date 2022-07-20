import {theme} from '../../config/theme';
import styled from 'styled-components/native';

export const Container = styled.ImageBackground.attrs({
  source: require('../../assets/images/loginBg.png'),
})`
  width: 100%;
  height: 100%;
  align-items: center;
  background-color: ${theme.grays.light};
`;
