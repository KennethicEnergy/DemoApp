import React, { Component } from 'react';
import { Text, StyleSheet, Image } from 'react-native'
import { Container, Header, Content, Icon } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

export default class GridContent extends Component {

  alertMessage = () => {
    alert("SAMPLE");
  }

  render() {
    return (
      <Col onPress={this.alertMessage} style={styles.gridContent}>
         <Image source= {{uri: 'http://saintheron.com/wp-content/uploads/2016/03/drake1-500x500.jpg'}} style={styles.gridImage} />
          <Text style={{color: 'white', textAlign: 'center',}}>Drake</Text>
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
    height: 150, 
  },

  gridImage: {
    width: 80, 
    height: 80, 
    borderRadius: 60
  }
});