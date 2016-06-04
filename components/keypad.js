import React from 'react-native';
import KeypadButton from './keypad-button';

let {
  View,
  Component
} = React;

class Keypad extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <View>
        <KeypadButton/>
        <KeypadButton/>
        <KeypadButton/>
        <KeypadButton/>
        <KeypadButton/>
        <KeypadButton/>
        <KeypadButton/>
        <KeypadButton/>
        <KeypadButton/>
        <KeypadButton/>
      </View>
    )
  }
}

export default Keypad;
