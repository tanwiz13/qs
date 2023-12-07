import React, {useState} from 'react';
import {SafeAreaView, ScrollView, Text} from 'react-native';
import {Input} from '../widgets/Input';
import {Button} from '../widgets/Button';
import Storage from '../utils/storage';
import constants from '../utils/constants';
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

  const {validateEmail, validateName} = validation;

  const onRegister = async () => {
    if (validateEmail(email) && validateName(fullName)) {
      await Storage.add(constants.EMAIL, email);
      await Storage.add(constants.FULLNAME, fullName);
      navigation.navigate('Login', {
        data: {email, fullName, password, pin},
      });
    }
  };

  return (
    <SafeAreaView style={{}}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={{padding: 30}}>
        <Text>Set up your pin</Text>
        <Input
          placeholder="Full name"
          value={fullName}
          onChangeText={(value: string) => {
            setFullName(value);
          }}
        />
        <Input
          placeholder="Email"
          value={email}
          onChangeText={(value: string) => {
            setEmail(value);
          }}
        />
        <Input
          placeholder="Password"
          value={password}
          onChangeText={(value: string) => {
            setPassword(value);
          }}
        />
        <Input
          placeholder="Confirm Password"
          value={confirmedPassword}
          onChangeText={(value: string) => {
            setConfirmedPassword(value);
          }}
        />
        <Input
          placeholder="Pin"
          value={pin}
          onChangeText={(value: string) => {
            setPin(value);
          }}
        />
        <Button
          onClick={() => {
            onRegister();
          }}
          buttonLabel="Register with pin"
          disabled={!email || !fullName}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

export default SetupPin;
