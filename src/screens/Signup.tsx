import React, {useState} from 'react';
import {SafeAreaView, ScrollView, Text} from 'react-native';
import {Input} from '../widgets/Input';
import {Button} from '../widgets/Button';
import validation from '../utils/validation';

function Signup({navigation}: {navigation: any}): JSX.Element {
  const [email, setEmail] = useState<string>('');
  const [fullName, setFullName] = useState<string>('');
  const [fullNameError, setFullNameError] = useState<string>('');
  const [emailError, setEmailError] = useState<string>('');

  const {validateEmail, validateName} = validation;

  const onRegister = async () => {
    if (!validateEmail(email)) {
      setEmailError('Invalid email!');
    }
    if (!validateName(fullName)) {
      setFullNameError('Invalid input!');
    }
    if (validateEmail(email) && validateName(fullName)) {
      navigation.navigate('SetupPin', {
        data: {email, fullName},
      });
    }
  };

  return (
    <SafeAreaView style={{}}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={{padding: 30}}>
        <Text>Signup</Text>
        <Input
          placeholder="Full name"
          error={fullNameError}
          value={fullName}
          onChangeText={(value: string) => {
            setFullNameError('');
            setFullName(value);
          }}
        />
        <Input
          placeholder="Email"
          error={emailError}
          value={email}
          onChangeText={(value: string) => {
            setEmailError('');
            setEmail(value);
          }}
        />
        <Button
          onClick={async () => onRegister()}
          buttonLabel="Register"
          disabled={!email || !fullName}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

export default Signup;
