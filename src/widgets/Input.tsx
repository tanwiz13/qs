import * as React from 'react';
import {
  StyleSheet,
  Text,
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
  error?: string;
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
  errorContainer: {
    borderColor: '#E8324A',
  },
  errorText: {
    marginStart: 5,
    color: '#E8324A',
    fontSize: 12,
  },
});

const Input = ({
  style,
  value,
  disabled = false,
  placeholder = '',
  error,
  ...rest
}: InputProps) => (
  <View style={style}>
    <TextInput
      value={value}
      placeholder={placeholder}
      placeholderTextColor={'gray'}
      style={[styles.textInput, !!error && styles.errorContainer]}
      onChangeText={rest.onChangeText}
      editable={!disabled}
      returnKeyType={'done'}
      {...rest}
    />
    {!!error && <Text style={styles.errorText}>{error}</Text>}
  </View>
);

export {Input};
