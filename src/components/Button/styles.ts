import {theme} from '../../config/theme';
import styled from 'styled-components/native';
import {Text} from '../Text';

export const Container = styled.View`
  align-items: center;
  justify-content: center;
`;

export const ButtonShape = styled.View`
  background-color: ${theme.grays.light};
  width: 255px;
  height: 262px;
  transform: rotate(45deg);
  border-radius: 87px;
  align-items: center;
  justify-content: center;
  border: 1px solid ${theme.grays.dark};
`;

export const ButtonInner = styled.TouchableOpacity`
  width: 236px;
  height: 242px;
  background-color: ${theme.grays.dark};

  border-radius: 79px;
  position: relative;
  padding: 10px;
`;

export const ButtonText = styled(Text).attrs({
  type: 'buttonLarge',
})`
  position: absolute;
  color: ${theme.grays.light};
`;
