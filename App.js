import React from 'react';

import { Text, SafeAreaView } from 'react-native';

import AppNavigation from './src/navigation';

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'red' }}>
      <AppNavigation />
    </SafeAreaView>
  );
};

export default App;
