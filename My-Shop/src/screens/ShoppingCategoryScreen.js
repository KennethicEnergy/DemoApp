import React from 'react';
import { Text } from 'react-native';
import { Content, Icon, Container, Header, Left, Title, Right, Body, Card, CardItem, Button, Item, Input } from 'native-base';
import ShoppingCategory from '../components/ShoppingCategory';

export default class ShoppingCategoryScreen extends React.Component {
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
      			<Text style={{fontWeight:'bold', color:'#FFF'}}>Shopping Category</Text>
          </Body>
          <Right>
            <Icon name='cart' style={{ color: "#FFF" }}/>
          </Right>
      	</Header>
	      	<Content>
	      		<ShoppingCategory />
	      	</Content>
      </Container>
    );	
  }
}
