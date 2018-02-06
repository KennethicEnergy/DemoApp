import React from 'react';
import { DrawerNavigator } from 'react-navigation';
import { Icon } from 'native-base'

import HomeScreen from './src/screens/HomeScreen';
import ShoppingCategoryScreen from './src/screens/ShoppingCategoryScreen';
import MyOrdersScreen from './src/screens/MyOrdersScreen';
import WishlistScreen from './src/screens/WishlistScreen';

export default class App extends React.Component {
  render() {
    return (
      <AppNavigator />
    );
  }
}

const AppNavigator = DrawerNavigator({
    HomeScreen:{
    screen: HomeScreen,
    navigationOptions: {
      title: 'Home',
    }
  },
  ShoppingCategoryScreen:{
    screen: ShoppingCategoryScreen,
    navigationOptions: {
      title: 'Shopping Category',
    }
  },
  MyOrdersScreen:{
    screen: MyOrdersScreen,
    navigationOptions: {
      title: 'My Orders',
    }
  },
  WishlistScreen:{
    screen: WishlistScreen,
    navigationOptions: {
      title: 'Wish List',
    }
  },
})