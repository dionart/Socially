import styled from 'styled-components/native';

export const Container = styled.ImageBackground.attrs({
  source: require('../../assets/images/loginBg.png'),
})`
  flex: 1;
`;

export const UserDataContainer = styled.View`
  justify-content: center;
  align-items: center;
  margin-top: 70px;
`;

export const ProfileImage = styled.Image`
  width: 86px;
  height: 89px;
  border-radius: 35px;
`;

export const ProfileImageBorder = styled.View`
  width: 95px;
  height: 98px;
  border-radius: 35px;
  transform: rotate(45deg);
  padding: 6px;
  align-items: center;
  justify-content: center;
  border: 1px solid #000;
`;
