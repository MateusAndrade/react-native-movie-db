import React, { FunctionComponent, useMemo } from "react";

import { StyleSheet, Text, TouchableOpacity } from "react-native";

import colors from '../../../constants/colors';

import { IGenreDomain } from "../../../../sdk/genre/genre.interface";

const generateRandomBackground = (backgrounds: string[]): string =>
  backgrounds[Math.floor(Math.random() * backgrounds.length)];

interface IGenreProps extends IGenreDomain {
  onSelectGenre: (genre: IGenreDomain) => void;
}

const GenreCard: FunctionComponent<IGenreProps> = ({ onSelectGenre, id, name }) => {
  const backgroundColor: string = useMemo(() => generateRandomBackground(colors.GENRE_BACKGROUNDS), colors.GENRE_BACKGROUNDS) ;

  return (
    <TouchableOpacity style={[styles.container, { backgroundColor }]} onPress={() => onSelectGenre({ id, name })}>
      <Text ellipsizeMode="tail" numberOfLines={1} style={styles.genreName}>{name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 4,
    elevation: 2,
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
    height: 100,
    width: 100,
  },
  genreName: {
    color: colors.WHITE,
    fontFamily: 'Source Sans Pro',
    fontSize: 14,
  },
});

export default GenreCard;