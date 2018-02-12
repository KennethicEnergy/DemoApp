import React from 'react';
import { View, Image, Text, ScrollView } from 'react-native';
import { Card } from 'native-base';

import styles from '../styles/styles';
import Products from './Products';
import sampleProducts from '../sampleProducts';

export default class ProductSelection extends React.Component {
	render() {
		return (
			<View>
				<ScrollView horizontal={true}>
					<Products
						imageUri={require('../images/Honda-CBR-150r.png')}
						productName={ sampleProducts.selection.product1.name }
						productPrice={ sampleProducts.selection.product1.price }
						productRating={ sampleProducts.selection.product1.rating }
					/>
					<Products
						imageUri={require('../images/Honda-CBR-150r.png')}
						productName={ sampleProducts.selection.product1.name }
						productPrice={ sampleProducts.selection.product1.price }
						productRating={ sampleProducts.selection.product1.rating }
					/>
					<Products
						imageUri={require('../images/Honda-CBR-150r.png')}
						productName={ sampleProducts.selection.product1.name }
						productPrice={ sampleProducts.selection.product1.price }
						productRating={ sampleProducts.selection.product1.rating }
					/>
					<Products
						imageUri={require('../images/Honda-CBR-150r.png')}
						productName={ sampleProducts.selection.product1.name }
						productPrice={ sampleProducts.selection.product1.price }
						productRating={ sampleProducts.selection.product1.rating }
					/>
					<Products
						imageUri={require('../images/Honda-CBR-150r.png')}
						productName={ sampleProducts.selection.product1.name }
						productPrice={ sampleProducts.selection.product1.price }
						productRating={ sampleProducts.selection.product1.rating }
					/>
					<Products
						imageUri={require('../images/Honda-CBR-150r.png')}
						productName={ sampleProducts.selection.product1.name }
						productPrice={ sampleProducts.selection.product1.price }
						productRating={ sampleProducts.selection.product1.rating }
					/>
					<Products
						imageUri={require('../images/Honda-CBR-150r.png')}
						productName={ sampleProducts.selection.product1.name }
						productPrice={ sampleProducts.selection.product1.price }
						productRating={ sampleProducts.selection.product1.rating }
					/>
				</ScrollView>
			</View>
		)
	}
}