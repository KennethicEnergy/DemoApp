 import React from 'react';
import { DrawerNavigator, DrawerItems } from 'react-navigation';
import { Text, TouchableOpacity, Image } from 'react-native';
import { Container, Content, Header, Body, Icon, Root } from 'native-base';

import HomeScreen from './src/screens/HomeScreen';
import ShoppingCategoryScreen from './src/screens/ShoppingCategoryScreen';
import MyOrdersScreen from './src/screens/MyOrdersScreen';
import WishlistScreen from './src/screens/WishlistScreen';
import LoginScreen from './src/screens/LoginScreen';

export default class App extends React.Component {

  render() {
    return (
      <Root>
        <AppNavigator {...this.props.navigation}/>        
      </Root>
    );
  }
}

const CustomDrawerContentComponent = (props) => (
  <Container>
    <Header style={{height:100, backgroundColor:'#0095DA'}}>
      <Body>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('LoginScreen')}>
          <Text style={{fontSize:25, fontWeight:'bold', paddingLeft: 10, color:'#FFF'}}>
            Login/Register
          </Text>
        </TouchableOpacity>
      </Body>
    </Header>
    <Content>
      <DrawerItems {...props}/>
    </Content>
  </Container>
)

const AppNavigator = DrawerNavigator({
    HomeScreen:{
    screen: HomeScreen,
    navigationOptions: {
      title: 'Home',
      drawerIcon:(
        <Icon name='ios-home' style={{paddingLeft: 10, color:'#0095DA',height:40, width: 40, justifyContent:'center'}}/>
        )
    }
  },
  ShoppingCategoryScreen:{
    screen: ShoppingCategoryScreen,
    navigationOptions: {
      title: 'Shopping Category',
      drawerIcon:(
        <Icon name='ios-grid' style={{paddingLeft: 10, color:'#0095DA',height:40, width: 40}}/>
        )
    }
  },
  MyOrdersScreen:{
    screen: MyOrdersScreen,
    navigationOptions: {
      title: 'My Orders',
      drawerIcon:(
        <Icon name='ios-basket' style={{paddingLeft: 10, color:'#0095DA',height:40, width: 40}}/>
        )
    }
  },
  WishlistScreen:{
    screen: WishlistScreen,
     navigationOptions: {
      title: 'Wishlist',
      drawerIcon:(
        <Icon name='ios-heart' style={{paddingLeft: 10, color:'#0095DA',height:40, width: 40}}/>
        )
    }
  },
  LoginScreen:{
    screen:LoginScreen
  }
},{
  initialRouteName: 'HomeScreen',
  drawerPosition:'left',
  contentComponent: CustomDrawerContentComponent,
  drawerOpenRoute: 'DrawerOpen',
  drawerCloseRoute: 'DrawerClose',
  drawerToggleRoute: 'DrawerToggle'
})