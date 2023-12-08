import React, {useState} from 'react';
import {SafeAreaView, ScrollView, Text} from 'react-native';
import {Input} from '../widgets/Input';
import {Button} from '../widgets/Button';
import Storage from '../utils/storage';
import {StorageKeys} from '../utils/constants';
import validation from '../utils/validation';

interface SetupPinProps {
  navigation: any;
  route: any;
}

function SetupPin({navigation, route}: SetupPinProps): JSX.Element {
  const {data} = route.params;
  const [email, setEmail] = useState<string>(data.email || '');
  const [fullName, setFullName] = useState<string>(data.fullName || '');
  const [password, setPassword] = useState<string>('');
  const [confirmedPassword, setConfirmedPassword] = useState<string>('');
  const [pin, setPin] = useState<string>('');

  const [errorObj, setErrorObj] = useState({
    emailError: '',
    fullNameError: '',
    passwordError: '',
    confirmedPasswordError: '',
    pinError: '',
  });

  const {validateEmail, validateName, validatePassword, areAllElementsEmpty} =
    validation;

  const onRegister = async () => {
    if (!validateName(fullName)) {
      setErrorObj(prevState => ({
        ...prevState,
        fullNameError: 'Invalid input!',
      }));
    }
    if (!validateEmail(email)) {
      setErrorObj(prevState => ({
        ...prevState,
        emailError: 'Invalid Email!',
      }));
    }
    if (!validatePassword(password)) {
      setErrorObj(prevState => ({
        ...prevState,
        passwordError: 'Password should be more than 6 characters!',
      }));
    }
    if (password !== confirmedPassword) {
      setErrorObj(prevState => ({
        ...prevState,
        confirmedPasswordError:
          'Entered password does not match with above password!',
      }));
    }
    if (!validatePassword(pin)) {
      setErrorObj(prevState => ({
        ...prevState,
        pinError: 'Pin should be more than 6 characters!',
      }));
    }
    if (
      validateEmail(email) &&
      validateName(fullName) &&
      validatePassword(password) &&
      password === confirmedPassword &&
      pin &&
      areAllElementsEmpty(Object.values(errorObj))
    ) {
      await Storage.add(StorageKeys.PIN, pin);
      await Storage.add(StorageKeys.REGISTRATION_SUCCESS, 'true');
      navigation.navigate('Login', {
        data: {email, fullName, password, pin},
      });
    }
  };

  const clearError = (keyName: string) => {
    setErrorObj(prevState => ({
      ...prevState,
      [keyName]: '',
    }));
  };

  return (
    <SafeAreaView>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={{padding: 30}}>
        <Text>Set up your pin</Text>
        <Input
          placeholder="Full name"
          value={fullName}
          error={errorObj.fullNameError}
          onChangeText={(value: string) => {
            clearError('fullNameError');
            setFullName(value);
          }}
        />
        <Input
          placeholder="Email"
          value={email}
          error={errorObj.emailError}
          onChangeText={(value: string) => {
            clearError('emailError');
            setEmail(value);
          }}
        />
        <Input
          placeholder="Password"
          value={password}
          error={errorObj.passwordError}
          secureTextEntry
          onChangeText={(value: string) => {
            clearError('passwordError');
            setPassword(value);
          }}
        />
        <Input
          placeholder="Confirm Password"
          error={errorObj.confirmedPasswordError}
          value={confirmedPassword}
          secureTextEntry
          onChangeText={(value: string) => {
            clearError('confirmedPasswordError');
            setConfirmedPassword(value);
          }}
        />
        <Input
          placeholder="Pin"
          value={pin}
          error={errorObj.pinError}
          onChangeText={(value: string) => {
            clearError('pinError');
            setPin(value);
          }}
        />
        <Button
          onClick={() => {
            onRegister();
          }}
          buttonLabel="Register with pin"
          disabled={
            !email || !fullName || !password || !confirmedPassword || !pin
          }
        />
      </ScrollView>
    </SafeAreaView>
  );
}

export default SetupPin;
