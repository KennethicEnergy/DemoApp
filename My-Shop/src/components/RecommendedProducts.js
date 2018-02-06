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
					<Products Cname='Saber' imageUri='https://vignette.wikia.nocookie.net/fategrandorder/images/5/5f/Sabericon.png/revision/latest?cb=20160205145551' />
				</ScrollView>
			</View>
		)
	}
}