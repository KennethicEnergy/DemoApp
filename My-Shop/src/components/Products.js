import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Card } from 'native-base';

import styles from '../styles/styles';

export default class Products extends React.Component {
	render() {
		return (
			<View>
				<TouchableOpacity>
					<Card style={styles.card}>
						<Image style={ styles.icon } source={{ uri: this.props.imageUri }}></Image>
						<Text style={ styles.productName }>{ this.props.productName }</Text>
					</Card>
				</TouchableOpacity>
			</View>
		)
	}
}