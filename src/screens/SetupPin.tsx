import React, {useState} from 'react';
import {SafeAreaView, ScrollView, Text} from 'react-native';
import {Input} from '../widgets/Input';
import {Button} from '../widgets/Button';

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
            console.log('>>>>', email, fullName);
            navigation.navigate('Login', {
              data: {email, fullName, password, pin},
            });
          }}
          buttonLabel="Register with pin"
          disabled={!email || !fullName}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

export default SetupPin;
