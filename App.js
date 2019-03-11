import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Header from './components/parts/Header'
import Footer from './components/parts/Footer'

export default class App extends React.Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
        <View style={{flex: 1}}>
          <Header />
          <Footer />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
