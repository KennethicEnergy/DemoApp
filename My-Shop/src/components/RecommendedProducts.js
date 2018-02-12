import React from 'react';
import { View, Image, Text, ScrollView } from 'react-native';
import { Card } from 'native-base';

import styles from '../styles/styles';
import Products from './Products';
import sampleProducts from '../sample-products';

export default class RecommendedProducts extends React.Component {
	render() {
		const { recommended } = sampleProducts
		return (
			<View>
				<Text style={styles.categoryTitle}>Recommended Products</Text>
				<ScrollView horizontal={true}>
					{
						Object.values(recommended).map(product => (
							<Products 
								key={ product.id }
								productImage={{ uri: product.image }}
								productName={ product.name }
								productPrice={ product.price }
								productRating={ product.rating }
							/>
						))
					}				
				</ScrollView>
			</View>
		)
	}
}