import React from 'react';
import { View, Image, Text, ScrollView } from 'react-native';
import { Card } from 'native-base';

import styles from '../styles/styles';
import Products from './Products';
import sampleProducts from '../sampleProducts';

export default class HotProducts extends React.Component {
	render() {
		return (
			<View>
				<ScrollView horizontal={true}>
					<Products
						imageUri={require('../images/Philips-Induction.jpg')}
						productName={ sampleProducts.hot.product1.name }
						productPrice={ sampleProducts.hot.product1.price }
						productRating={ sampleProducts.hot.product1.rating }
					/>
					<Products
						imageUri={require('../images/Philips-Induction.jpg')}
						productName={ sampleProducts.hot.product1.name }
						productPrice={ sampleProducts.hot.product1.price }
						productRating={ sampleProducts.hot.product1.rating }
					/>
					<Products
						imageUri={require('../images/Philips-Induction.jpg')}
						productName={ sampleProducts.hot.product1.name }
						productPrice={ sampleProducts.hot.product1.price }
						productRating={ sampleProducts.hot.product1.rating }
					/>
					<Products
						imageUri={require('../images/Philips-Induction.jpg')}
						productName={ sampleProducts.hot.product1.name }
						productPrice={ sampleProducts.hot.product1.price }
						productRating={ sampleProducts.hot.product1.rating }
					/>
					<Products
						imageUri={require('../images/Philips-Induction.jpg')}
						productName={ sampleProducts.hot.product1.name }
						productPrice={ sampleProducts.hot.product1.price }
						productRating={ sampleProducts.hot.product1.rating }
					/>
					<Products
						imageUri={require('../images/Philips-Induction.jpg')}
						productName={ sampleProducts.hot.product1.name }
						productPrice={ sampleProducts.hot.product1.price }
						productRating={ sampleProducts.hot.product1.rating }
					/>
					<Products
						imageUri={require('../images/Philips-Induction.jpg')}
						productName={ sampleProducts.hot.product1.name }
						productPrice={ sampleProducts.hot.product1.price }
						productRating={ sampleProducts.hot.product1.rating }
					/>
				</ScrollView>
			</View>
		)
	}
}