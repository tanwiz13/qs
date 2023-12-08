import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Signup from './src/screens/Signup';
import SetupPin from './src/screens/SetupPin';
import Home from './src/screens/Home';
import Login from './src/screens/Login';
import Storage from './src/utils/storage';
import {StorageKeys} from './src/utils/constants';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  const [isLoggedIn, setIsLoggedIn] = React.useState<boolean>(false);

  const getLoginStatus = async () => {
    const isRegistered = await Storage.get(StorageKeys.REGISTRATION_SUCCESS);
    const storedPin = await Storage.get(StorageKeys.PIN);

    if (Boolean(isRegistered) && storedPin) {
      setIsLoggedIn(true);
    }
  };

  React.useEffect(() => {
    getLoginStatus();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        {!isLoggedIn ? (
          <>
            <Stack.Screen name="Signup" component={Signup} />
            <Stack.Screen name="SetupPin" component={SetupPin} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Home" component={Home} />
          </>
        ) : (
          <>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Home" component={Home} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
