import React, {useState} from 'react';
import {SafeAreaView, ScrollView, Text} from 'react-native';
import {Input} from '../widgets/Input';
import {Button} from '../widgets/Button';
import validation from '../utils/validation';
import Storage from '../utils/storage';
import constants from '../utils/constants';

function Signup({navigation}: {navigation: any}): JSX.Element {
  const [email, setEmail] = useState<string>('');
  const [fullName, setFullName] = useState<string>('');

  const {validateEmail, validateName} = validation;

  const onRegister = async () => {
    if (validateEmail(email) && validateName(fullName)) {
      await Storage.add(constants.EMAIL, email);
      await Storage.add(constants.FULLNAME, fullName);
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
        <Button
          onClick={async () => onRegister()}
          buttonLabel="Register"
          disabled={!(validateEmail(email) && validateName(fullName))}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

export default Signup;
