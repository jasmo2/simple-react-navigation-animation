import React from 'react';
import {
  createStackNavigator,
  createAppContainer,
  createDrawerNavigator,
  createBottomTabNavigator,
} from 'react-navigation';
import { MainScreen, SecondaryScreen } from './screens/index.js';
import { simpleConfig } from './configurations/simple';
import { advanceConfig } from './configurations/advance';

export default createAppContainer(
  createStackNavigator(
    {
      Screen1: {
        screen: MainScreen,
      },
      Screen2: {
        screen: SecondaryScreen,
      },
    },
    {
      headerMode: 'none',
      transitionConfig: advanceConfig,
    }
  )
);
