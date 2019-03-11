import React, { Component } from 'react'
import { Keyboard } from 'react-native'
import { Item, Input, Icon } from 'native-base';

class SearchBar extends Component {
    componentWillMount() {
        this.keyboardDidShowListener = Keyboard.addListener(
          'keyboardDidShow',
          this._keyboardDidShow,
        )
        this.keyboardDidHideListener = Keyboard.addListener(
          'keyboardDidHide',
          this._keyboardDidHide,
        )
      }
    
    componentWillUnmount() {
        this.keyboardDidShowListener.remove();
        this.keyboardDidHideListener.remove();
    }
    
      _keyboardDidShow() {
        console.log('Keyboard Shown');
      }
    
      _keyboardDidHide() {
        console.log('Keyboard Hidden');
      }

    render() {
        return(
            
          <Item rounded style={{marginTop: 10, width: '80%', marginBottom:10}}>
          <Icon active name='search' />
            <Input
                    placeholder = 'Search'
                    placeholderTextColor = '#000'
                    onSubmitEditing={Keyboard.dismiss}
                    onEndEditing={this.props.onSubmit}
                    onChangeText={this.props.onChangeText}
                    />
          </Item>
          
        )
    }
}


export default SearchBar