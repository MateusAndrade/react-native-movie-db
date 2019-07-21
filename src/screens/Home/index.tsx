import React, { FunctionComponent, useEffect, useState } from 'react';

import { StyleSheet, View } from 'react-native';

import SplashScreen from 'react-native-splash-screen';

import DiscoverProvider from '../../../sdk/discover/discover.provider';
import GenreProvider from '../../../sdk/genre/genre.provider';

import {
  IDiscoverDomain,
  IDiscoverMovieSuccess,
} from '../../../sdk/discover/discover.interface';

import { IGenreDomain, IGenreSuccess } from '../../../sdk/genre/genre.interface';

import { SimpleMovieList, GenreList } from '../../components';

const Home: FunctionComponent<{}> = () => {
  const [popularMovies, setPopulerMovies] = useState<IDiscoverDomain[]>([]);

  const [genres, setGenres] = useState<IGenreDomain[]>([]);

  // const [isSearchingGenres, setIsSearchingGenres] = useState<boolean>(true);

  const fetchMovies = async () => {
    const { ok, data } = await DiscoverProvider.discoverMovies();

    SplashScreen.hide();

    if (ok) {
      const { results } = data as IDiscoverMovieSuccess;
      setPopulerMovies(results);
    }
  };

  const fetchGenreMovies = async () => {
    const { ok, data } = await GenreProvider.getMovieGenres();

    if (ok) {
      const dataOk = data as IGenreSuccess;
      setGenres(dataOk.genres);
    }
  };

  // TODO: Add select movie logic
  const onSelectMovie = (movie: IDiscoverDomain) => {
    console.log('movie', movie);
  };

  // TODO: Add select genre logic
  const onSelectGenre = (genre: IGenreDomain) => {
    console.log('genre', genre);
  };

  useEffect(() => {
    fetchMovies();
    fetchGenreMovies();
  }, []);

  return (
    <View style={styles.container}>
      <SimpleMovieList
        data={popularMovies}
        icon="ios-trending-up"
        onSelectMovie={onSelectMovie}
        title="Most popular releases:"
      />
      <GenreList
        data={genres}
        icon="ios-film"        
        onSelectGenre={onSelectGenre}
        title="Looking for a genre?"
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
