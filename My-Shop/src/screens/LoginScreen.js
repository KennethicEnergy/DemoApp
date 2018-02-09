import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { Content, Icon, Container, Header, Left, Title, Right, Body, Card, CardItem, Button, Item, Input, Form, Label } from 'native-base';
import * as firebase from 'firebase';

// Initialize firebase
const firebaseConfig = {
    //Store to another Js/JsonFile!!
    apiKey: "AIzaSyAoSoA6BwZLpC7_eGBodphFkuqVPT9S9Xs",
    authDomain: "my-shop-92375.firebaseapp.com",
    databaseURL: "https://my-shop-92375.firebaseio.com",
    projectId: "my-shop-92375",
    storageBucket: "my-shop-92375.appspot.com",
};

firebase.initializeApp(firebaseConfig);

export default class LoginScreen extends React.Component {
  constructor(props){
    super(props)
    
    this.state = ({
      email: '',
      password: '',
    })
  };

  signupUser = (email, password) => {
    try{
      if(this.state.password.length<6)
      {
        alert('Please enter at least 6 characters')
        return;
      }
      firebase.auth().createUserWithEmailAndPassword(email, password)
    }
    catch(error){
      console.log(error.toString())
    }
  }

  loginUser = (email, password) => {
    
  }

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
        <Container style={styles.content}>
          <Content>
            <Form>
              <Item floatingLabel>
                <Label>Email</Label>
                <Input 
                  autoCorrect={false}
                  autoCapitalize='none'
                  onChangeText={(email) => this.setState({ email })}
                />
              </Item>
              <Item floatingLabel>
                <Label>Password</Label>
                <Input 
                  secureTextEntry={true}
                  autoCorrect={false}
                  autoCapitalize='none'
                  onChangeText={(password) => this.setState({ password })}
                />
              </Item>
              <Button style={{marginTop:10}}
                full
                rounded
                success
                onPress={() => this.loginUser(this.state.email,this.state.password)}
              >
              <Text style={{color:'white'}}>Login</Text>
              </Button>
              <Button style={{marginTop:10}}
                full
                rounded
                primary
                onPress={() => this.signupUser(this.state.email, this.state.password)}
              >
              <Text style={{color:'white'}}>Sign Up</Text>
              </Button>
            </Form>
          </Content>
        </Container>
      </Container>
    );	
  }
}

const styles = StyleSheet.create({
  content:{
    flex: 1,
    backgroundColor:'#FFF',
    justifyContent: 'center',
    padding:10,
  }
})