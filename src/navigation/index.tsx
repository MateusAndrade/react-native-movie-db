import React from 'react';

import {
  createAppContainer,
  createStackNavigator,
  NavigationRouteConfig,
} from 'react-navigation';

import routes from '../constants/routes';

import Home from '../screens/Home';

import { SearchBar } from '../components';

const AppNavigator = createStackNavigator({
  [routes.HOME]: {
    screen: Home,
    navigationOptions: ({ navigation }: NavigationRouteConfig) => ({
      header: <SearchBar navigation={navigation} />,
    }),
  },
});

export default createAppContainer(AppNavigator);
