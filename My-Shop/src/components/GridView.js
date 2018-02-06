import React, { Component } from 'react';
import {Text} from 'react-native'
import { Container, Header, Content, Icon } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

import GridContent from './GridContent';

export default class GridView extends Component {

  alertMessage = () => {
    alert("SAMPLE");
  }
  
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Grid> 
            <GridContent />
            <GridContent />
            <GridContent />
            <GridContent />
          </Grid>
        </Content>
      </Container>
    );
  }
}