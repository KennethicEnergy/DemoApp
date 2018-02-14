import React from 'react';
import { Text, StyleSheet, View,TouchableOpacity } from 'react-native';
import { Content, Icon, Container, Header, Left, Title, Right, Body, Card, CardItem, Button, Item, Input, Form, Label } from 'native-base';
import * as firebase from 'firebase';
import Expo from 'expo';

// Initialize firebase
const firebaseConfig = {
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
    try{
      firebase.auth().signInWithEmailAndPassword(email, password).then(function(user){
        console.log(user)
      })
    }
    catch(error){
      console.log(error.toString())
    }
  }

  
  conponentDidMount(){
    firebase.auth().onAuthStateChanged((user) => {
      if (user != null) {
        console.log(user)
      }
    })
  }

  //facebook login
  // Hide Keys to another file!!!! 
  async loginWithFacebook() {
    const AppId = '2111472412414462';

    const {type, token} = await Expo.Facebook.logInWithReadPermissionsAsync
    (`${AppId}`, { permissions: ['public_profile'] })

    if (type == 'success') {
      const credential = firebase.auth.FacebookAuthProvider.credential(token)

      firebase.auth().signInWithCredential(credential).catch((error) => {
        console.log(error)
      })
    }
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
              <Button style={{marginTop: 80}}
                full
                primary
                onPress={() => this.loginWithFacebook()}
              >
              <Text style={{color:'white'}}>Login with facebook</Text>
              </Button>
              <Button style={{marginTop:10}}
                full
                danger
                onPress={() => alert('Hi')}
              >
              <Text style={{color:'white'}}>Sign in with Google +</Text>
              </Button>
              <View style={{paddingTop:30, flex:1, justifyContent:'center', flexDirection:'row'}}>
                <Text>or</Text>
              </View>
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
              <Button style={{marginTop:20}}
                full
                warning
                onPress={() => this.loginUser(this.state.email,this.state.password)}
              >
              <Text style={{color:'white'}}>Login</Text>
              </Button>

              <View style={styles.view2}>
                <Text style={{marginTop:30, paddingLeft:90}}>New to My Shop?</Text>
                  <TouchableOpacity style={{marginTop:30, paddingRight:90}}
                    onPress={() => this.signupUser(this.state.email, this.state.password)}
                  >
                    <Text style={{color:'#0095DA'}}>Sign Up</Text>
                  </TouchableOpacity>
              </View>
              <TouchableOpacity>
                <View style={{paddingTop:30, flex:1, justifyContent:'center', flexDirection:'row'}}>
                <Text style={{color:'#0095DA'}}>Forgot Password?</Text>
              </View>
              </TouchableOpacity>
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
  },
  view2:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
})