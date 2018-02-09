import React from 'react';
import { Text, View, ScrollView, TouchableOpacity, Image } from 'react-native';

export default class ViewSliderContent extends React.Component {
	render(){
		return(
			<TouchableOpacity>
					<View style={{width: 200, height: 120, margin: 8,}}>
						<Image source={{uri: 'https://www.static-src.com/siva/asset/02_2018/digital-banner-cny-travel-revised.jpg'}} style={{'width': 200, 'height': 120}} />
					</View>
				</TouchableOpacity>
		)
	}
}