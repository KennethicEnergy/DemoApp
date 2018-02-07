import React, { Component } from 'react';
import {Text, View} from 'react-native'
import { Container, Header, Content, Icon } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

import FeaturedBrandContents from './FeaturedBrandContents';

export default class FeaturedBrand extends Component {

  alertMessage = () => {
    alert("SAMPLE");
  }
  
  render() {
    return (
      <Content>
        <Text style={{fontSize:25, marginTop: 10, marginBottom: 10}}>Featured Brands</Text>
        <Grid> 
          <FeaturedBrandContents />
          <FeaturedBrandContents />
          <FeaturedBrandContents />
        </Grid>

         <Grid> 
          <FeaturedBrandContents />
          <FeaturedBrandContents />
          <FeaturedBrandContents />
        </Grid>

         <Grid> 
          <FeaturedBrandContents />
          <FeaturedBrandContents />
          <FeaturedBrandContents />
        </Grid>
      </Content>
    );
  }
}