import React, { FunctionComponent, useEffect } from 'react';

import { StyleSheet, Text, ScrollView } from 'react-native';

import DiscoverProvider from '../../../sdk/discover/discover.provider';

const Home: FunctionComponent<{}> = () => {
  const fetchMovies = async () => {
    const { ok, data } = await DiscoverProvider.discoverMovies({
      primary_release_year: 2019,
    });
    console.log('ok, data', ok, data);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <ScrollView style={styles.container}>
      <Text>Home</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Home;
