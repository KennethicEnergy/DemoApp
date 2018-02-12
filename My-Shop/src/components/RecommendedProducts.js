import React from 'react';
import { View, Image, Text, ScrollView } from 'react-native';
import { Card } from 'native-base';

import styles from '../styles/styles';
import Products from './Products';
import sampleProducts from '../sampleProducts.json';

export default class RecommendedProducts extends React.Component {
	render() {
		const { recommended } = sampleProducts
		return (
			<View>
				<ScrollView horizontal={true}>
					{Object.values(recommended).map(product => (
						<Products
							imageUri={require('../images/Xperia-XA1.png')}
							productName={ product.name }
							productPrice={ product.price }
							productRating={ product.rating }
							key={product.id}
						/>
					))}
					
				</ScrollView>
			</View>
		)
	}
}