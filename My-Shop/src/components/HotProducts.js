import React from 'react';
import { View, Image, Text, ScrollView } from 'react-native';
import { Card } from 'native-base';

import styles from '../styles/styles';
import Products from './Products';

export default class HotProducts extends React.Component {
	render() {
		return (
			<View>
				<Text style={styles.categoryTitle}>Hot Products</Text>
				<ScrollView horizontal={true}>
					<Products
						imageUri={require('../images/Philips-Induction.jpg')}
						productName='Philips HD4932 Induction Cooker'
						productPrice='Php. 5,894.75'
					/>
					<Products
						imageUri={require('../images/Philips-Induction.jpg')}
						productName='Philips HD4932 Induction Cooker'
						productPrice='Php. 5,894.75'
					/>
					<Products
						imageUri={require('../images/Philips-Induction.jpg')}
						productName='Philips HD4932 Induction Cooker'
						productPrice='Php. 5,894.75'
					/>
					<Products
						imageUri={require('../images/Philips-Induction.jpg')}
						productName='Philips HD4932 Induction Cooker'
						productPrice='Php. 5,894.75'
					/>
					<Products
						imageUri={require('../images/Philips-Induction.jpg')}
						productName='Philips HD4932 Induction Cooker'
						productPrice='Php. 5,894.75'
					/>
					<Products
						imageUri={require('../images/Philips-Induction.jpg')}
						productName='Philips HD4932 Induction Cooker'
						productPrice='Php. 5,894.75'
					/>
					<Products
						imageUri={require('../images/Philips-Induction.jpg')}
						productName='Philips HD4932 Induction Cooker'
						productPrice='Php. 5,894.75'
					/>
				</ScrollView>
			</View>
		)
	}
}