import React from 'react';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { Button } from 'native-base';

export default class ViewSlider extends React.Component {
	render(){
		return(
			<ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
				<TouchableOpacity>
					<View style={{width: 200, height: 100, backgroundColor: '#f80c12', margin: 8,}} />
				</TouchableOpacity>
				<TouchableOpacity>
					<View style={{width: 200, height: 100, backgroundColor: '#f80c12', margin: 8,}} />
				</TouchableOpacity>
				<TouchableOpacity>
					<View style={{width: 200, height: 100, backgroundColor: '#f80c12', margin: 8,}} />
				</TouchableOpacity>
				<TouchableOpacity>
					<View style={{width: 200, height: 100, backgroundColor: '#f80c12', margin: 8,}} />
				</TouchableOpacity>
				<TouchableOpacity>
					<View style={{width: 200, height: 100, backgroundColor: '#f80c12', margin: 8,}} />
				</TouchableOpacity>
			</ScrollView>
			)
	}
}