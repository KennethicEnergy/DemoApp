import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Content, Icon, Container, Header, Left, Title, Right, Body, Card, CardItem, Button, Item, Input } from 'native-base';

import GridView from '../components/GridView';
import RecommendedProducts from '../components/RecommendedProducts';
import Carousel from '../components/Carousel';
export default class HomeScreen extends React.Component {
  render() {
    return (
      <Container>
      	<Header>
      		<Left>
      			<Button 
      				transparent
              onPress={() => this.props.navigation.navigate('DrawerOpen')}>
              <Icon name="menu" style={{ color: "#0095DA" }}/>
      			</Button>
      		</Left>
      		<Body>
      			<Image style={{height:30, width:80}}source={require('../images/logo-blibli.png')}></Image>
      		</Body>
					<Right>
      			<Button
              transparent
              onPress={() => alert('Joke wala pang laman')}>
              <Icon name='cart' style={{ color: "#0095DA" }}/>
            </Button>
      		</Right>
      	</Header>
          <Content>
            <Carousel />
            {/*View Slider*/}
            {/*New to BliBli*/}
            {/*New to BliBli SignUp*/}
            {/*Shopping Category (Grid)*/}
            <GridView />
            {/*Shopping Category (Grid)*/}
            {/*Featured Brands*/}
            <RecommendedProducts />
            {/*<RecommendedProducts />*/}
            {/*Hot Product*/}
            {/*Recently Viewed Product*/}
         	</Content>	
      </Container>
    );
  }
}

