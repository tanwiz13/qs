import React, {useState} from 'react';
import {SafeAreaView, ScrollView, Text} from 'react-native';
import {Input} from '../widgets/Input';
import {Button} from '../widgets/Button';

function Signup({navigation}: {navigation: any}): JSX.Element {
  const [email, setEmail] = useState<string>('');
  const [fullName, setFullName] = useState<string>('');
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
          onClick={() => {
            console.log('>>>>', email, fullName);
            navigation.navigate('SetupPin', {
              data: {email, fullName},
            });
          }}
          buttonLabel="Register"
          disabled={!email || !fullName}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

export default Signup;
