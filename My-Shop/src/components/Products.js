import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Card } from 'native-base';

export default class Products extends React.Component {
	render() {
		return (
			<View>
				<TouchableOpacity>
					<Card>
						<Image style={styles.icon} />
						<Text style={styles.name}></Text>
					</Card>
				</TouchableOpacity>
			</View>
		)
	}
}