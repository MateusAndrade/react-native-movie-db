import React, { FunctionComponent, useEffect, useState } from 'react';

import { StyleSheet, View } from 'react-native';

import SplashScreen from 'react-native-splash-screen';

import DiscoverProvider from '../../../sdk/discover/discover.provider';

import {
  IDiscoverDomain,
  IDiscoverMovieSuccess,
} from '../../../sdk/discover/discover.interface';

import { SimpleMovieList } from '../../components';

const Home: FunctionComponent<{}> = () => {
  const [popularMovies, setPopulerMovies] = useState<IDiscoverDomain[]>([]);

  const fetchMovies = async () => {
    const { ok, data } = await DiscoverProvider.discoverMovies();

    SplashScreen.hide();

    if (ok) {
      const { results } = data as IDiscoverMovieSuccess;
      setPopulerMovies(results);
    }
  };

  // TODO: Add select movie logic
  const onSelectMovie = (movie: IDiscoverDomain) => {
    console.log('movie', movie);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <View style={styles.container}>
      <SimpleMovieList
        data={popularMovies}
        icon="ios-trending-up"
        onSelectMovie={onSelectMovie}
        title="Most popular releases:"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flatListContainer: {
    height: 260,
  },
});

export default Home;
