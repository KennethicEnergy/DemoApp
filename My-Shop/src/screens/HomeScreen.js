import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Content, Icon, Container, Header, Left, Title, Right, Body, Card, CardItem, Button, Item, Input } from 'native-base';
import GridView from '../components/GridView';

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
      	<Body style={{ backgroundColor: '#dddddd'}}>
        	<Content>
          <View>
            {/*Carousel*/}
          </View>
          <View>
            {/*View Slider*/}
          </View>
          <View>
            {/*New to BliBli*/}
          </View>
          <View>
            {/*New to BliBli SignUp*/}
          </View>
          <View>
            {/*Shopping Category (Grid)*/}
          </View>
          <View>
            {/*Shopping Category (Grid)*/}
          </View>
          <View>
            {/*Featured Brands*/}
          </View>
          <View>
            {/*Product Recommendation*/}
          </View>
          <View>
            {/*Hot Product*/}
          </View>
          <View>
            {/*Recently Viewed Product*/}
          </View>
         	</Content>	
      	</Body>
      </Container>
    );
  }
}

