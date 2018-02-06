import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Content, Icon, Container, Header, Left, Title, Right, Body, Card, CardItem, Button, Item, Input } from 'native-base';
<<<<<<< HEAD
// import GridView from '../components/GridView';
=======

import GridView from '../components/GridView';
import RecommendedProducts from '../components/RecommendedProducts';
>>>>>>> refs/remotes/origin/master

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
<<<<<<< HEAD
      	<Body style={{ backgroundColor: '#d3d3d3'}}>
            <Text> SAMPLE TEXT </Text>	
      	</Body>
=======

        <Content>
            {/*Carousel*/}
            {/*View Slider*/}
            {/*New to BliBli*/}
            {/*Shopping Category (Grid)*/}
            {/*Featured Brands*/}
            {/*<RecommendedProducts />*/}
            {/*Hot Product*/}
            {/*Recently Viewed Product*/}
         </Content>	

>>>>>>> refs/remotes/origin/master
      </Container>
    );
  }
}

