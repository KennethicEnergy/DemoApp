import React, { Component } from 'react';
import {Text, View} from 'react-native'
import { Container, Header, Content, Icon } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

import Categories from './Categories';

export default class ShoppingCategory extends Component {
  alertMessage = () => {
    alert("SAMPLE");
  }
  render() {
    return (
      <Content>
        <Text style={{fontSize:25, marginTop: 10, marginBottom: 10}}>Shopping Category</Text>
        <Grid> 
          <Categories />
          <Categories />
          <Categories />
          <Categories />
        </Grid>
         <Grid> 
          <Categories />
          <Categories />
          <Categories />
          <Categories />
        </Grid>
         <Grid> 
          <Categories />
          <Categories />
          <Categories />
          <Categories />
        </Grid>
         <Grid> 
          <Categories />
          <Categories />
          <Categories />
          <Categories />
        </Grid>
      </Content>
    );
  }
}