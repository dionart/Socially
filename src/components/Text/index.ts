import styled from 'styled-components/native';

// Theme
type DesignTexts = 'title' | 'bodyRegular' | 'buttonLarge';
type FontWeight = 'regular' | 'Regular' | 'semibold' | 'bold' | 'black';

export type TextProps = {
  size?: number;
  color?: string;
  weight?: FontWeight;
  opacity?: number;

  // Margin
  marginTop?: number;
  marginBottom?: number;
  marginLeft?: number;
  marginRight?: number;

  type?: DesignTexts;
  textTransform?: 'none' | 'capitalize' | 'lowercase' | 'uppercase';

  align?: 'left' | 'right' | 'center' | 'justify';
};

const VariantStyles: Record<DesignTexts, string> = {
  title: `
    font-size: 39px;
    line-height: 58px;
    font-family: Poppins-Bold;
  `,
  bodyRegular: `
    font-size: 14px;
    line-height: 21px;
    font-family: Poppins-Regular;
  `,
  buttonLarge: `
    font-size: 20px;
    line-height: 30px;
    font-family: Poppins-Regular;
  `,
};

export const Text = styled.Text<TextProps>`
  color: ${({color = '#000'}) => color};
  font-size: ${({size = 16}) => size}px;
  opacity: ${({opacity = 1}) => opacity};
  text-transform: ${({textTransform = 'none'}) => textTransform};

  /* Margin */
  margin-top: ${({marginTop = 0}) => marginTop}px;
  margin-right: ${({marginRight = 0}) => marginRight}px;
  margin-bottom: ${({marginBottom = 0}) => marginBottom}px;
  margin-left: ${({marginLeft = 0}) => marginLeft}px;
  text-align: ${props => props.align || 'auto'};
  font-family: 'Poppins-Regular';

  ${({type}) => type && VariantStyles[type]}
`;
