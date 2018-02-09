import React from 'react';
import { Text, View, ScrollView, TouchableOpacity, Image } from 'react-native';

import ViewSliderContent from './ViewSliderContent';

export default class ViewSlider extends React.Component {
	render(){
		return(
			<ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
				<ViewSliderContent />
				<ViewSliderContent />
				<ViewSliderContent />
				<ViewSliderContent />
			</ScrollView>
		)
	}
}