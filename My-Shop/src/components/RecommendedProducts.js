import React from 'react';
import { View, Image, Text, ScrollView } from 'react-native';
import { Card } from 'native-base';

import Products from './Products';

export default class RecommendedProducts extends React.Component {
	render() {
		return (
			<View>
				<Text>Recommended Products</Text>
				<ScrollView horizontal={true}>
					<Products
						imageUri={require('../images/Xperia-XA1.png')}
						productName='Sony Xperia XA1'
						productPrice='Php. 17,000'
						productRating='5/5'
					/>
					<Products
						imageUri={require('../images/Xperia-XA1.png')}
						productName='Sony Xperia XA1'
					/>
					<Products
						imageUri={require('../images/PS4-Slim.png')}
						productName='Sony PlayStation 4 Slim'
					/>
					<Products
						imageUri={require('../images/Xperia-XA1.png')}
						productName='Sony Xperia XA1'
						productPrice='Php. 17,000'
						productRating='5/5'
					/>
					<Products
						imageUri={require('../images/Xperia-XA1.png')}
						productName='Sony Xperia XA1'
						productPrice='Php. 17,000'
						productRating='5/5'
					/>
					<Products
						imageUri={require('../images/Xperia-XA1.png')}
						productName='Sony Xperia XA1'
						productPrice='Php. 17,000'
						productRating='5/5'
					/>
					<Products
						imageUri={require('../images/Xperia-XA1.png')}
						productName='Sony Xperia XA1'
						productPrice='Php. 17,000'
						productRating='5/5'
					/>
				</ScrollView>
			</View>
		)
	}
}