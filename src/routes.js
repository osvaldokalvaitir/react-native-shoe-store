import { createAppContainer, createStackNavigator } from 'react-navigation';

import Main from './pages/main';
import Product from './pages/product';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Main,
      Product,
    },
    {
      navigationOptions: {
        headerStyle: {
          backgroundColor: '#DA552F',
        },
        headerTintColor: '#FFF',
      },
    },
  ),
);

export default Routes;
