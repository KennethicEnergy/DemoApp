import React from 'react';
import { View, Image, Text, ScrollView } from 'react-native';
import { Card } from 'native-base';

import Products from './Products';

export default class ProductSelection extends React.Component {
	render() {
		return (
			<View>
				<Text>Product Selection</Text>
				<ScrollView horizontal={true}>
					<Products
						imageUri={require('../images/Honda-CBR-150r.png')}
						productName='Honda CBR 150r'
						productPrice='Php. 120,000.00'
					/>
					<Products
						imageUri={require('../images/Honda-CBR-150r.png')}
						productName='Honda CBR 150r'
						productPrice='Php. 120,000.00'
					/>
					<Products
						imageUri={require('../images/Honda-CBR-150r.png')}
						productName='Honda CBR 150r'
						productPrice='Php. 120,000.00'
					/>
					<Products
						imageUri={require('../images/Honda-CBR-150r.png')}
						productName='Honda CBR 150r'
						productPrice='Php. 120,000.00'
					/>
					<Products
						imageUri={require('../images/Honda-CBR-150r.png')}
						productName='Honda CBR 150r'
						productPrice='Php. 120,000.00'
					/>
					<Products
						imageUri={require('../images/Honda-CBR-150r.png')}
						productName='Honda CBR 150r'
						productPrice='Php. 120,000.00'
					/>
					<Products
						imageUri={require('../images/Honda-CBR-150r.png')}
						productName='Honda CBR 150r'
						productPrice='Php. 120,000.00'
					/>
				</ScrollView>
			</View>
		)
	}
}