import { createAppContainer, createStackNavigator } from 'react-navigation';

import routes from './routes';

import Home from '../screens/Home';

const AppNavigator = createStackNavigator({
  [routes.HOME]: {
    screen: Home,
  },
});

export default createAppContainer(AppNavigator);
