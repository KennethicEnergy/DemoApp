import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Card, CardItem, Body } from 'native-base';

import styles from '../styles/styles';
import sampleProducts from '../sampleProducts';

export default class Products extends React.Component {
	render() {
		const { productName, productPrice, productRating, imageUri } = this.props;
		return (
			<View>
				<TouchableOpacity>
					<Card style={ styles.card }>
						<CardItem>
							<Image style={ styles.productImage } source={ imageUri } resizeMode='contain' />
						</CardItem>
						<CardItem>
							<Body>
								<Text style={ styles.productName }>{productName}</Text>
								<Text style={ styles.productName }>{productPrice}</Text>
								<Text style={ styles.productName }>{productRating}</Text>
							</Body>
						</CardItem>
					</Card>
				</TouchableOpacity>
			</View>
		)
	}
}