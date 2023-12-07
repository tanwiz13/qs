import React, {useState} from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import {Input} from '../widgets/Input';
import {Button} from '../widgets/Button';
import Storage from '../utils/storage';
import constants from '../utils/constants';

interface SetupPinProps {
  navigation: any;
}

function Login({navigation}: SetupPinProps): JSX.Element {
  const [pin, setPin] = useState<string>('');

  const onEnterPin = async () => {
    const storedPin = await Storage.get(constants.PIN);
    console.log('>>>>>>stored pin', storedPin);
    if (pin === storedPin) {
      navigation.navigate('Home');
    }
  };

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
            onEnterPin();
          }}
          buttonLabel="Enter pin"
          disabled={!pin}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

export default Login;
