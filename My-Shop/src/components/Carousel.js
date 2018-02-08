import React from 'react';
import Carousel from 'react-native-banner-carousel';
import { StyleSheet, Image, View, Dimensions } from 'react-native';

const BannerWidth = Dimensions.get('window').width;
const BannerHeight = 260;

const images = [
    'https://www.flightclub.com/media/catalog/product/cache/1/image/1600x1140/9df78eab33525d08d6e5fb8d27136e95/8/0/803063_01.jpg',
    'https://www.flightclub.com/media/catalog/product/cache/1/image/1600x1140/9df78eab33525d08d6e5fb8d27136e95/8/0/802764_01.jpg',
    'https://www.flightclub.com/media/catalog/product/cache/1/image/1600x1140/9df78eab33525d08d6e5fb8d27136e95/6/3/63611742940-jordan-23-501-denim-pack-levis-x-jordan-multi-multi-010703_1.jpg',
    'https://www.flightclub.com/media/catalog/product/cache/1/image/1600x1140/9df78eab33525d08d6e5fb8d27136e95/0/1/012379_1.jpg',
    'https://www.flightclub.com/media/catalog/product/cache/1/image/1600x1140/9df78eab33525d08d6e5fb8d27136e95/8/0/800624_1.jpg',
    'https://www.flightclub.com/media/catalog/product/cache/1/image/1600x1140/9df78eab33525d08d6e5fb8d27136e95/8/0/802618_01.jpg'
];

export default class App extends React.Component {
    renderPage(image, index) {
        return (
            <View key={index}>
                <Image style={{ width: 380, height: 280 }} source={{ uri: image }} />   
            </View>
        );
    }

    render() {
        return (
            <View style={styles.container}>
                <Carousel
                    autoplay
                    autoplayTimeout={3000}
                    loop
                    index={0}
                    pageSize={600}
                >
                    {images.map((image, index) => this.renderPage(image, index))}
                </Carousel>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#dddddd',
        justifyContent: 'center'
    },
});