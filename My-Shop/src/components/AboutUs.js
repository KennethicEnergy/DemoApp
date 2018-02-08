import React from 'react';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';

export default class AboutUs extends React.Component {
	render(){
		return(
			<View>
				<Image source={require('../images/logo-blibli.png')} />
				<Text>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, neque. Iste, quisquam. Commodi, nihil. Consequatur dolorum eum ratione architecto tempora at cupiditate, facilis assumenda natus, incidunt sint nihil temporibus dicta.
				</Text>	
			</View>
		)
	}
}