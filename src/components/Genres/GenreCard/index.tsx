import React, { FunctionComponent, useMemo } from "react";

import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import LinearGradient from 'react-native-linear-gradient';

import colors from '../../../constants/colors';

import { IGenreDomain } from "../../../../sdk/genre/genre.interface";

const generateRandomGradient = (gradients: string[][]): string[] =>
  gradients[Math.floor(Math.random() * gradients.length)];

interface IGenreProps extends IGenreDomain {
  onSelectGenre: (genre: IGenreDomain) => void;
}

const GenreCard: FunctionComponent<IGenreProps> = ({ onSelectGenre, id, name }) => {
  const gradient: string[] = useMemo(() => generateRandomGradient(colors.GRADIENTS_GENRES), colors.GRADIENTS_GENRES) ;

  return (
    <LinearGradient style={[styles.container]} colors={gradient}>
      <TouchableOpacity onPress={() => onSelectGenre({ id, name })}>
        <Text ellipsizeMode="tail" numberOfLines={1} style={styles.genreName}>{name}</Text>
      </TouchableOpacity>
    </LinearGradient>
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