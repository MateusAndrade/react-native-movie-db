import React, { FunctionComponent } from 'react';

import { Text, View } from 'react-native';

const Home: FunctionComponent<{}> = () => {
  return (
    <View style={{ backgroundColor: 'red', flex: 1 }}>
      <Text>Home</Text>
    </View>
  );
};

export default Home;