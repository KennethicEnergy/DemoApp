import React from 'react';
import { Text } from 'react-native';
import { Content, Icon, Container, Header, Left, Title, Right, Body, Card, CardItem, Button, Item, Input } from 'native-base';

export default class LoginScreen extends React.Component {
  render() {
    return (
       <Container>
      	<Header searchBar style={{backgroundColor:'#0095DA'}}>
      		<Left>
      			<Button 
      				transparent
              onPress={() => this.props.navigation.goBack()}>
              <Icon name="ios-arrow-back-outline" style={{ color: "#FFF" }}/>
      			</Button>
      		</Left>
      		<Body>
      			<Text style={{fontWeight:'bold', color:'#FFF'}}>Login</Text>
      		</Body>
					<Right/>
      	</Header>
	      	<Content>
	      		{/*Laman Goes Here*/}
	      	</Content>
      </Container>
    );	
  }
}
