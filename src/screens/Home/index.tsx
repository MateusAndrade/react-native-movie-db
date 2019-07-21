import React, { FunctionComponent, useEffect, useState } from 'react';

import { FlatList, StyleSheet, Text, View } from 'react-native';

import DiscoverProvider from '../../../sdk/discover/discover.provider';

import {
  IDiscoverDomain,
  IDiscoverMovieSuccess,
} from '../../../sdk/discover/discover.interface';

import { SimpleMovieBox } from '../../components';

const Home: FunctionComponent<{}> = () => {
  const [popularMovies, setPopulerMovies] = useState<IDiscoverDomain[]>([]);

  const fetchMovies = async () => {
    const { ok, data } = await DiscoverProvider.discoverMovies({
      primary_release_year: new Date().getFullYear(),
    });

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
      <View style={styles.flatListContainer}>
        <FlatList
          data={popularMovies}
          horizontal={true}
          keyExtractor={(item: IDiscoverDomain) => `k=${item.id}`}
          renderItem={({ item }) => (
            <SimpleMovieBox onSelectMovie={onSelectMovie} {...item} />
          )}
          showsHorizontalScrollIndicator={false}
        />
      </View>
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
