import React, { FunctionComponent } from 'react';

import { SafeAreaView } from 'react-native';

import AppNavigation from './src/navigation';

const App: FunctionComponent<{}> = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'red' }}>
      <AppNavigation />
    </SafeAreaView>
  );
};

export default App;
