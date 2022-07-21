import {theme} from '../../config/theme';
import styled from 'styled-components/native';

export const Container = styled.ImageBackground.attrs({
  source: require('../../assets/images/homeBg.png'),
})`
  width: 100%;
  height: 100%;
  flex: 1;
  background-color: ${theme.grays.light};
`;

export const ProfileImage = styled.Image`
  width: 56px;
  height: 56px;
  border-radius: 28px;
  border: 2px solid ${theme.mainColors.dark_blue};
`;

export const ListHeaderContainer = styled.TouchableOpacity`
  width: 56px;
  height: 56px;
  border-radius: 28px;
  overflow: hidden;
  align-items: center;
  justify-content: center;
  margin-right: 30px;
`;
