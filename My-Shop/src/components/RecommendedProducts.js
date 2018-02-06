import React from 'react';
import { View, Image, Text, ScollView } from 'react-native';
import { Card } from 'native-base';

import Products from './Products';

export default class RecommendedProducts extends React.Component {
	render() {
		return (
			<View>
				<Text>Recomended Products</Text>
				<ScollView>
					<Products />
				</ScollView>
			</View>
		)
	}
}