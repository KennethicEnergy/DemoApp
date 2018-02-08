import React from 'react';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';

export default class ViewSlider extends React.Component {
	render(){
		return(
			<ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
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
				<TouchableOpacity>
					<View style={{width: 200, height: 120, backgroundColor: '#0095DA', margin: 8,}} />
				</TouchableOpacity>
			</ScrollView>
			)
	}
}