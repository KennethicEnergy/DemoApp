import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Button, Header, Left, Right } from 'native-base';
import LoginScreen from '../screens/LoginScreen';
import { StackNavigator } from 'react-navigation';

export default class ViewSlider extends React.Component {
	render(){
		return(
			<View style={styles.view}>
				<Button full rounded info style={{margin:10}}>
					<Text style={styles.text1}>SIGN IN</Text>
				</Button>
					<View style={styles.view2}>
						<Text>New to My Shop?</Text>
						<TouchableOpacity onPress={() => this.props.navigation.navigate('LoginScreen')}>
							<Text style={{color:'#0095DA'}}>Sign Up Now</Text>
						</TouchableOpacity>
					</View>
			</View>
			)
	}
}

const styles = StyleSheet.create({
	view:{
		padding: 20,
		backgroundColor:'#ffffff'
	},
	text1:{
		fontSize:20,
		fontWeight:'bold',
		color:'#FFF',
	},
	text2:{
		marginTop:20
	},
	view2:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
	}
})