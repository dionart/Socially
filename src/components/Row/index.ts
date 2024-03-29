import styled from 'styled-components/native';

interface RowProps {
  center?: boolean;
  spaceBetween?: boolean;
}

export const Row = styled.View<RowProps>`
  flex-direction: row;
  align-items: ${({center}) => (center ? 'center' : 'flex-start')};
  justify-content: ${({spaceBetween}) =>
    spaceBetween ? 'space-between' : 'flex-start'};
`;
