import React, {useState} from 'react';
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
import {NavigatorParamList} from '@/navigators/navigatorParamList';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

const Login: React.FC = () => {
  const insets = useSafeAreaInsets();
  const navigation =
    useNavigation<NativeStackNavigationProp<NavigatorParamList>>();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Container style={{paddingTop: insets.top}}>
      <HeroSVG style={{marginTop: '10%'}} />
      <Text type="title">Socially</Text>
      <Box padding={24}>
        <Input onChangeText={setEmail} placeholder="Email" icon="mail" />
        <Input
          onChangeText={setPassword}
          marginTop={16}
          placeholder="Password"
          icon="lock"
        />
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
