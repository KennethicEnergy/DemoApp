import React from 'react';
import { View, Image, Text, ScrollView } from 'react-native';
import { Card } from 'native-base';

import Products from './Products';

export default class RecommendedProducts extends React.Component {
	render() {
		return (
			<View>
				<Text>Recommended Products</Text>
				<ScrollView>
					<Products productName='Sony Xperia XA1' />
				</ScrollView>
			</View>
		)
	}
}