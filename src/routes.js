import { createAppContainer, createStackNavigator } from 'react-navigation';
import colors from '~/styles';

import Main from '~/pages/main';
import Product from '~/pages/product';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Main: { screen: Main },
      Product: { screen: Product },
    },
    {
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: colors.primaryDark,
        },
        headerTintColor: colors.white,
        headerBackTitle: null,
      },
      headerLayoutPreset: 'center',
    },
  ),
);

export default Routes;
