import React from 'react';
import { View, Image, Text, ScrollView } from 'react-native';
import { Card } from 'native-base';

import styles from '../styles/styles';
import Products from './Products';
import sampleProducts from '../sample-products';

export default class ProductSelection extends React.Component {
	render() {
		const { selection } = sampleProducts
		return (
			<View>
				<ScrollView horizontal={true}>
					{
						Object.values(selection).map(product => (
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