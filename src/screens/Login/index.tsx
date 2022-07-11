import React from 'react';

import {Container} from './styles';

const image = {uri: '../assets/bg.png'};

const Login: React.FC = () => {
  return <Container source={require('../../assets/images/bg.png')}></Container>;
};

export default Login;
