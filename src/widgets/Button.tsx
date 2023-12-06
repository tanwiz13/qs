import * as React from 'react';
import {TouchableOpacity, ViewStyle, StyleSheet, Text} from 'react-native';

interface ButtonProps {
  onClick: Function;
  style?: ViewStyle[] | ViewStyle;
  disabled?: boolean;
  buttonLabel?: string;
  textProps?: any;
}

const styles = StyleSheet.create({
  buttonContainer: {
    height: 48,
    width: '100%',
    borderRadius: 8,
    borderColor: 'gray',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 15,
    backgroundColor: '#0F1B26',
  },
  disabled: {
    backgroundColor: 'gray',
  },
  text: {
    marginHorizontal: 8,
    color: 'white',
    textAlign: 'center',
    alignSelf: 'center',
  },
});

const Button = ({
  style,
  onClick,
  disabled,
  buttonLabel,
  textProps,
}: ButtonProps) => {
  return (
    <TouchableOpacity
      style={[styles.buttonContainer, disabled && styles.disabled, style]}
      activeOpacity={1}
      disabled={disabled}
      onPress={() => onClick()}>
      <Text style={styles.text} {...textProps}>
        {buttonLabel}
      </Text>
    </TouchableOpacity>
  );
};

export {Button};
