import React, { Component } from 'react';
import {StyleSheet} from 'react-native'
import { Container, Header, Left, Body, Right, Title, Subtitle } from 'native-base';

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#28262C',
        padding: 10,
    },
    title: {
        fontSize: 20,
        width: '100%',
        color: '#F9F5FF',
    },
    subtitle: {
        color: '#F9F5FF',
    }
})

export default class HeaderLayout extends Component {
  render() {
    return (
        <Header style={styles.header}>
          <Left />
          <Body>
            <Title style={styles.title}>React Movies</Title>
            <Subtitle style={styles.subtitle}>Now Playing</Subtitle>
          </Body>
          <Right />
        </Header>
    );
  }
}

