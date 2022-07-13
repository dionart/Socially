import {Dimensions} from 'react-native';
import {theme} from '../../config/theme';
import styled from 'styled-components/native';
const {width: windowWidth, height: windowHeight} = Dimensions.get('window');

interface PaginationDotProps {
  active: boolean;
  isLast: boolean;
}

export const Container = styled.View`
  width: 100%;
  height: 320px;
`;

export const SliderContainer = styled.View`
  width: ${windowWidth}px;
  align-items: center;
`;

export const FooterContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 21px;
  width: 100%;
`;

export const PaginationDot = styled.View<PaginationDotProps>`
  width: 11px;
  height: 11px;
  border-radius: 6px;
  background-color: ${({active}) =>
    active ? theme.grays.dark : theme.grays.light};
  border: 1px solid ${theme.grays.dark};
  margin-right: ${({isLast}) => (isLast ? '0' : '8px')};
`;
