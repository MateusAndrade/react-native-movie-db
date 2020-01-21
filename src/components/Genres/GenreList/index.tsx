import React, { FunctionComponent } from "react";

import { FlatList, StyleSheet, Text, View } from "react-native";

import Icon from 'react-native-vector-icons/Ionicons';

import colors from '../../../constants/colors';

import { IGenreDomain } from "../../../../sdk/genre/genre.interface";

import GenreCard from "../GenreCard";

interface IGenreListProps {
  data: IGenreDomain[];
  title?: string;
  icon?: string;
  onSelectGenre: (genre: IGenreDomain) => void;
}

const GenreList: FunctionComponent<IGenreListProps> = ({
  data,
  title,
  icon,
  onSelectGenre,
}) => (
  <View style={styles.flatListContainer}>
    {title && (
      <View style={styles.titleContainer}>
        {icon && (
          <Icon name={icon} size={20} color={colors.LOGO_HOME_BACKGROUND} />
        )}
        <Text style={styles.title}>{title}</Text>
      </View>
    )}
    <FlatList
      showsHorizontalScrollIndicator={false}
      data={data}
      horizontal={true}
      keyExtractor={(item) => `k=${item.id}`}
      renderItem={({ item }) => <GenreCard {...item} onSelectGenre={onSelectGenre} /> }
    />
  </View>
);

const styles = StyleSheet.create({
  flatListContainer: {
    height: 150,
  },
  title: {
    fontFamily: 'Source Sans Pro',
    marginLeft: 10,
  },
  titleContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    marginLeft: 10,
    marginTop: 10,
  },
});

export default GenreList;