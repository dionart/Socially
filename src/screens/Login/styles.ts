import styled from 'styled-components/native';

export const Container = styled.ImageBackground.attrs({
  source: require('../../assets/images/bg.png'),
})`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;
