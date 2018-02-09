import React from 'react';
import { Text, View, ScrollView, TouchableOpacity, Image } from 'react-native';

export default class ViewSlider extends React.Component {
	render(){
		return(
			<ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
				<TouchableOpacity>
					<View style={{width: 200, height: 120, margin: 8,}}>
						<Image source={{uri: 'https://www.static-src.com/siva/asset/02_2018/digital-banner-cny-travel-revised.jpg'}} style={{'width': 50, 'height': 50}} />
					</View>
				</TouchableOpacity>
				<TouchableOpacity>
					<View style={{width: 200, height: 120, backgroundColor: '#0095DA', margin: 8,}} />
				</TouchableOpacity>
				<TouchableOpacity>
					<View style={{width: 200, height: 120, backgroundColor: '#0095DA', margin: 8,}} />
				</TouchableOpacity>
				<TouchableOpacity>
					<View style={{width: 200, height: 120, backgroundColor: '#0095DA', margin: 8,}} />
				</TouchableOpacity>
				<TouchableOpacity>
					<View style={{width: 200, height: 120, backgroundColor: '#0095DA', margin: 8,}} />
				</TouchableOpacity>
			</ScrollView>
		)
	}
}