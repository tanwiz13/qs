import React, {useState} from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import {Input} from '../widgets/Input';
import {Button} from '../widgets/Button';

interface SetupPinProps {
  navigation: any;
}

function Login({navigation}: SetupPinProps): JSX.Element {
  const [pin, setPin] = useState<string>('');

  return (
    <SafeAreaView style={{}}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={{padding: 30}}>
        <Input
          placeholder="Pin"
          value={pin}
          onChangeText={(value: string) => {
            setPin(value);
          }}
        />
        <Button
          onClick={() => {
            navigation.navigate('Home');
          }}
          buttonLabel="Enter pin"
          disabled={!pin}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

export default Login;
