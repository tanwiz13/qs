import * as React from 'react';
import {
  StyleSheet,
  TextInput,
  TextInputProps,
  TextStyle,
  View,
} from 'react-native';

interface InputProps extends TextInputProps {
  disabled?: boolean;
  style?: TextStyle;
  value?: string;
  placeholder: string;
}

const styles = StyleSheet.create({
  textInput: {
    color: 'black',
    fontSize: 13,
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#ffff',
    marginVertical: 10,
  },
});

const Input = ({
  style,
  value,
  disabled = false,
  placeholder = '',
  ...rest
}: InputProps) => (
  <View style={style}>
    <TextInput
      value={value}
      placeholder={placeholder}
      placeholderTextColor={'gray'}
      style={[styles.textInput]}
      onChangeText={rest.onChangeText}
      editable={!disabled}
      returnKeyType={'done'}
      {...rest}
    />
  </View>
);

export {Input};
