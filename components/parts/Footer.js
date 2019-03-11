import React, { Component } from 'react';
import {StyleSheet} from 'react-native'
import { Container, Content, Footer, FooterTab, Button, Icon, Text } from 'native-base';

import NowPlaying from './Navigation/NowPlaying'
import Search from './Navigation/Search'
import List from './Navigation/List'

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#28262C',
        color: '#F9F5FF',
    },
    text: {
        color: '#F9F5FF',
    },
    textActive: {
        color: '#000',
    },
    subtitle: {
        color: '#F9F5FF',
    },
})

export default class FooterLayout extends Component {

    constructor(props) {
        super(props)
        this.state= {
            index: 0
        }   
    }

    tabSwitch(tab) {
        this.setState({
            index: tab,
        })
    }

    renderSelectedTab () {
        switch (this.state.index) {
            case 0:
              return (<NowPlaying />);
              break;
            case 1:
              return (<Search />);
              break;
            case 2:
              return (<List />);
              break;
            default:
          }
    }

  render() {
    return (
      <Container>
          
        <Content style={{height: '100%'}}>
            {this.renderSelectedTab()}
        </Content>
        <Footer style={styles.header}>
          <FooterTab>
            <Button title="nowplay" vertical active={this.state.index === 0} onPress={() => this.tabSwitch(0)}>
              <Icon style={this.state.index === 0 ? styles.textActive: styles.text} name="play" />
              <Text style={this.state.index === 0 ? styles.textActive: styles.text}>Now Playing</Text>
            </Button>
            <Button vertical active={this.state.index === 1} onPress={() => this.tabSwitch(1)}>
              <Icon style={this.state.index === 1 ? styles.textActive: styles.text} name="search" />
              <Text style={this.state.index === 1 ? styles.textActive: styles.text}>Search</Text>
            </Button>
            <Button vertical active={this.state.index === 2} onPress={() => this.tabSwitch(2)}>
              <Icon style={this.state.index === 2 ? styles.textActive: styles.text} name="list" />
              <Text style={this.state.index === 2 ? styles.textActive: styles.text}>List</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}