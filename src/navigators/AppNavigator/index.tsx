import * as React from 'react';
import {Button, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Welcome from '../../screens/Welcome';
import Login from '../../screens/Login';
import Home from '../../screens/Home';
import {Text} from '../../components/Text';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Box} from '../../components/Box';
import BottomNavigator from '../BottomNavigator';
import {NavigatorParamList} from '../navigatorParamList';

const Stack = createNativeStackNavigator<NavigatorParamList>();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen
          options={{
            headerShown: false,
            headerLeft: () => (
              <Text marginLeft={8} type="header">
                Socially
              </Text>
            ),
            headerRight: () => (
              <Box marginRight={10}>
                <Icon size={18} name="bell" />
              </Box>
            ),
            headerTitle: '',
            headerTransparent: true,
          }}
          name="Home"
          component={BottomNavigator}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
