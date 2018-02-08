import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Content, Icon, Container, Header, Left, Title, Right, Body, Card, CardItem, Button, Item, Input } from 'native-base';

import Carousel from '../components/Carousel';
import ViewSlider from '../components/ViewSlider';
import SignIn from '../components/SignIn-Up';
import ShoppingCategory from '../components/ShoppingCategory';
import FeaturedBrands from '../components/FeaturedBrands';
import RecommendedProducts from '../components/RecommendedProducts';
import HotProducts from '../components/HotProducts';
import ProductSelection from '../components/ProductSelection';

export default class HomeScreen extends React.Component {
  render() {
    return (
      <Container>
      	<Header>
      		<Left>
      			<Button 
      				transparent
              onPress={() => this.props.navigation.navigate('DrawerOpen')}>
              <Icon name="ios-menu" style={{ color: "#0095DA" }}/>
      			</Button>
      		</Left>
      		<Body>
      			<Image style={{height:30, width:85}}source={require('../images/logo-blibli.png')}></Image>
      		</Body>
					<Right>
      			<Button
              transparent
              onPress={() => alert('Joke wala pang laman')}>
              <Icon name='cart' style={{ color: "#0095DA" }}/>
            </Button>
      		</Right>
      	</Header>
          <Content style={{backgroundColor:'#dddddd'}}>
            <Carousel />
            <ViewSlider />
            <SignIn/>
            <ShoppingCategory />
            <FeaturedBrands />
            <RecommendedProducts />
            <HotProducts />
            <ProductSelection />
         	</Content>	
      </Container>
    );
  }
}

