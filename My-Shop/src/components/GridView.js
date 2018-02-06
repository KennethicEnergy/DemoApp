import React, { Component } from 'react';
import {Text, View} from 'react-native'
import { Container, Header, Content, Icon } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

import GridContent from './GridContent';

export default class GridView extends Component {

  alertMessage = () => {
    alert("SAMPLE");
  }
  
  render() {
    return (
      <Content>
        <Text style={{fontSize:25, marginTop: 10, marginBottom: 10}}>Shopping Category</Text>
        <Grid> 
          <GridContent />
          <GridContent />
          <GridContent />
          <GridContent />
        </Grid>

         <Grid> 
          <GridContent />
          <GridContent />
          <GridContent />
          <GridContent />
        </Grid>

         <Grid> 
          <GridContent />
          <GridContent />
          <GridContent />
          <GridContent />
        </Grid>
      </Content>
    );
  }
}