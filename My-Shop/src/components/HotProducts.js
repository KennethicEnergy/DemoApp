import React from 'react';
import { View, Image, Text, ScrollView } from 'react-native';
import { Card } from 'native-base';

import Products from './Products';

export default class HotProducts extends React.Component {
	render() {
		return (
			<View>
				<Text>Hot Products</Text>
				<ScrollView horizontal={true}>
					<Products
						imageUri={require('../images/Philips-Induction.png')}
						productName='Philips HD4932 Induction Cooker'
						productPrice='Php. 5,894.75'
					/>
				</ScrollView>
			</View>
		)
	}
}