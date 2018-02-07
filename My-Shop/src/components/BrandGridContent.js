import React, { Component } from 'react';
import { Text, StyleSheet, Image } from 'react-native'
import { Container, Header, Content, Icon } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

export default class BrandGrid extends Component {

  alertMessage = () => {
    alert("SAMPLE");
  }

  render() {
    return (
      <Col onPress={this.alertMessage} style={styles.gridContent}>
         <Image source= {{uri: 'http://pluspng.com/img-png/samsung-logo-png-samsung-logo-png-2104.png'}} style={styles.gridImage} />
      </Col>
    );
  }
}

const styles = StyleSheet.create({
  gridContent: {
    borderColor: '#d3d3d3', 
    borderStyle: 'solid', 
    borderWidth: 0.5, 
    backgroundColor: 'white', 
    height: 75
  },

  gridImage: {
    width: 80, 
    height: 80, 
  },

  gridText: {
    color: 'black', 
    textAlign: 'center'
  }
});