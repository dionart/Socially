import {theme} from '../../config/theme';
import styled from 'styled-components/native';

interface ProfileImageProps {
  size?: number;
  bordered?: boolean;
}

export const Container = styled.ImageBackground.attrs({
  source: require('../../assets/images/homeBg.png'),
})`
  width: 100%;
  height: 100%;
  flex: 1;
  background-color: ${theme.grays.light};
`;

export const ProfileImage = styled.Image<ProfileImageProps>`
  width: ${({size = 56}) => size}px;
  height: ${({size = 56}) => size}px;
  border-radius: 28px;
  border: ${({bordered = true}) =>
    bordered ? `2px solid ${theme.mainColors.dark_blue}` : '0'};
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

export const Badge = styled.View`
  width: 70px;
  border-radius: 35px;
  align-items: center;
  justify-content: center;
  background-color: rgba(229, 229, 229, 0.4);
  height: 27px;
`;
