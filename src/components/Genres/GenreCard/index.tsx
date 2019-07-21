import React, { FunctionComponent } from "react";

import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import colors from '../../../constants/colors';

import { IGenreDomain } from "../../../../sdk/genre/genre.interface";

interface IGenreProps extends IGenreDomain {
  onSelectGenre: (genre: IGenreDomain) => void;
}

const GenreCard: FunctionComponent<IGenreProps> = ({ onSelectGenre, id, name }) => (
  <TouchableOpacity style={styles.container} onPress={() => onSelectGenre({ id, name })}>
    <Text ellipsizeMode="tail" numberOfLines={1} style={styles.genreName}>{name}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: "red",
    borderRadius: 4,
    elevation: 2,
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
    height: 100,
    width: 100,
  },
  genreName: {
    fontFamily: 'Source Sans Pro',
    fontSize: 14,
  },
});

export default GenreCard;