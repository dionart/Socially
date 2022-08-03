import * as React from 'react';

import {
  BottomTabBarButtonProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';

import Home from '../../screens/Home';
import {Text} from '../../components/Text';
import Icon from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import {Box} from '../../components/Box';
import {theme} from '@/config/theme';
import {StyleSheet, TouchableOpacity} from 'react-native';

const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  const AddTabBarButton = ({onPress}: BottomTabBarButtonProps) => (
    <>
      <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
        <Box style={styles.button}>
          <Feather color={theme.grays.light} name="x-circle" size={22} />
        </Box>
      </TouchableOpacity>
    </>
  );

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: true,
        headerLeft: () => (
          <Text marginLeft={24} type="header">
            Socially
          </Text>
        ),
        headerRight: () => (
          <Box marginRight={24}>
            <Icon size={18} name="bell" />
          </Box>
        ),
        headerTitle: '',
        headerTransparent: true,
      }}>
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <Box style={styles.itemTop}>
              <Feather
                color={
                  focused ? theme.mainColors.lighter_blue : theme.grays.dark
                }
                name="home"
                size={20}
              />
            </Box>
          ),
          title: '',
        }}
        name="Home"
        component={Home}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <Box style={styles.itemTop}>
              <Feather
                color={
                  focused ? theme.mainColors.lighter_blue : theme.grays.dark
                }
                name="message-square"
                size={20}
              />
            </Box>
          ),
          title: '',
        }}
        name="Chat"
        component={Home}
      />
      <Tab.Screen
        options={{
          title: '',
          tabBarButton: props => <AddTabBarButton {...props} />,
        }}
        name="NewPost"
        component={Home}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <Box style={styles.itemTop}>
              <Feather
                color={
                  focused ? theme.mainColors.lighter_blue : theme.grays.dark
                }
                name="heart"
                size={20}
              />
            </Box>
          ),
          title: '',
        }}
        name="Likes"
        component={Home}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <Box style={styles.itemTop}>
              <Feather
                color={
                  focused ? theme.mainColors.lighter_blue : theme.grays.dark
                }
                name="user"
                size={20}
              />
            </Box>
          ),
          title: '',
        }}
        name="Profile"
        component={Home}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,

    elevation: 15,
  },
  itemTop: {
    top: 10,
  },
  buttonContainer: {
    top: -20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    transform: [{rotate: '45deg'}],
    borderRadius: 23,
    backgroundColor: theme.grays.dark,
  },
});

export default BottomNavigator;
