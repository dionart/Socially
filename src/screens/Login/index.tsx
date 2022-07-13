import React from 'react';

import {ButtonContainer, Container, Content} from './styles';
import HeroSVG from '../../assets/images/hero.svg';
import {Text} from '../../components/Text';

import {Button} from '../../components/Button';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {StatusBar, View} from 'react-native';
import {Carrousel} from '../../components/Carrousel';

const Login: React.FC = () => {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle="dark-content" />
      <Container>
        <Content>
          <Text color="#4E4E4E" type="bodyRegular">
            Welcome to
          </Text>
          <Text marginBottom={58} align="center" type="title">
            Socially
          </Text>

          {/* <HeroSVG style={{marginBottom: 58}} /> */}
          <View>
            <Carrousel />
          </View>
        </Content>
        <ButtonContainer>
          <Button />
        </ButtonContainer>
      </Container>
    </SafeAreaProvider>
  );
};

export default Login;
