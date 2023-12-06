import React from 'react';
import {SafeAreaView, ScrollView, Text} from 'react-native';

function Home(): JSX.Element {
  return (
    <SafeAreaView style={{}}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={{padding: 30}}>
        <Text>Home</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Home;
