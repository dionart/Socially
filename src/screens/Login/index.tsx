import React from 'react';
import {View} from 'react-native';

import {Container} from './styles';
import HeroSVG from '../../assets/images/hero2.svg';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {ButtonContainer} from '../Welcome/styles';
import {useNavigation} from '@react-navigation/native';
import {Button} from '@/components/Button';
import {Box} from '@/components/Box';
import Input from '@/components/Input';
import {Text} from '@/components/Text';

const Login: React.FC = () => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();

  return (
    <Container style={{paddingTop: insets.top}}>
      <HeroSVG style={{marginTop: '10%'}} />
      <Text type="title">Socially</Text>
      <Box padding={24}>
        <Input placeholder="Email" icon="mail" />
        <Input marginTop={16} placeholder="Password" icon="lock" />
      </Box>
      <ButtonContainer>
        <Button
          onPress={() => navigation.navigate('Home')}
          text="Login"
          icon="arrow-right"
        />
      </ButtonContainer>
    </Container>
  );
};

export default Login;
