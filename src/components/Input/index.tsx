import React from 'react';
import {StyleSheet, View} from 'react-native';
import {theme} from '../../config/theme';
import Icon from 'react-native-vector-icons/Feather';
import {Container, TextInput} from './styles';
import {BoxProps} from '../../utils/box-props';

type InputProps = BoxProps & {
  icon?: string;
  placeholder: string;
  onChangeText: (text: string) => void;
};

const Input: React.FC<InputProps> = ({
  icon,
  placeholder,
  onChangeText,
  ...props
}) => {
  return (
    <Container {...props} style={styles.shadow}>
      {icon && <Icon name={icon} size={20} color={theme.grays.gray_darker} />}
      <TextInput
        onChangeText={onChangeText}
        placeholderTextColor={theme.grays.gray_light}
        style={styles.input}
        placeholder={placeholder}
      />
    </Container>
  );
};

export default Input;

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#0202026b',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  input: {
    fontSize: 13,
    fontWeight: '400',
    fontFamily: 'Poppins',
    color: '#5F5F5F',
  },
});
