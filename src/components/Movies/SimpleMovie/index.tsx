import React, { FunctionComponent } from 'react';

import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import Config from 'react-native-config';

import Icon from 'react-native-vector-icons/Ionicons';

import { View as AnimatedView } from 'react-native-animatable';

import { IDiscoverDomain } from '../../../../sdk/discover/discover.interface';

import colors from '../../../constants/colors';

interface ISimpleMovieBox extends IDiscoverDomain {
  onSelectMovie: (movieInfo: IDiscoverDomain) => void;
}

const SimpleMovieBox: FunctionComponent<ISimpleMovieBox> = props => {
  const { onSelectMovie, poster_path, vote_average } = props;

  return (
    <AnimatedView animation="fadeInDownBig" style={styles.container}>
      <TouchableOpacity onPress={() => onSelectMovie(props)}>
        <Image
          style={styles.moviePoster}
          source={{ uri: `${Config.MOVIE_DB_IMG_URL}/w500/${poster_path}` }}
        />
        <View style={styles.movieInfo}>
          <Icon name="ios-star" size={15} color={colors.WHITE} />
          <Text
            style={styles.popularity}
            ellipsizeMode="tail"
            numberOfLines={1}
          >
            {vote_average}
          </Text>
        </View>
      </TouchableOpacity>
    </AnimatedView>
  );
};

const styles = StyleSheet.create({
  container: {
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    elevation: 4,
    margin: 10,
    width: 125,
    height: 230,
  },
  movieInfo: {
    alignItems: 'center',
    backgroundColor: colors.STATUS_BAR_HOME,
    justifyContent: 'center',
    height: 30,
    flexDirection: 'row',
  },
  moviePoster: {
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    height: 200,
    width: 125,
  },
  popularity: {
    color: colors.WHITE,
    fontFamily: 'SourceSansPro-Black',
    marginLeft: 5,
  },
});

export default SimpleMovieBox;
