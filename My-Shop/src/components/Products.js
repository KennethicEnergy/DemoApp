import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Card, CardItem } from 'native-base';

import styles from '../styles/styles';

export default class Products extends React.Component {
	render() {
		return (
			<View>
				<TouchableOpacity>
					<Card style={ styles.card }>
						<CardItem>
							<Image style={ styles.productImage } source={ this.props.imageUri } resizeMode='contain' />
						</CardItem>
						<Text style={ styles.productName }>{this.props.productName}</Text>
						<Text style={ styles.productName }>{this.props.productPrice}</Text>
						<Text style={ styles.productName }>{this.props.productRating}</Text>
					</Card>
				</TouchableOpacity>
			</View>
		)
	}
}