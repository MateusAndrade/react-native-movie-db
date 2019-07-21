import React, { FunctionComponent } from 'react';

import { FlatList, StyleSheet, Text, View } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import colors from '../../../constants/colors';

import { IDiscoverDomain } from '../../../../sdk/discover/discover.interface';

import SimpleMovieBox from '../SimpleMovie';

interface ISimpleMovieListProps {
  data: IDiscoverDomain[];
  title?: string;
  icon?: string;
  onSelectMovie: (movie: IDiscoverDomain) => void;
}

const SimpleMovieList: FunctionComponent<ISimpleMovieListProps> = ({
  data,
  title,
  onSelectMovie,
  icon,
}) => {
  return (
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
        data={data}
        horizontal={true}
        keyExtractor={(item: IDiscoverDomain) => `k=${item.id}`}
        renderItem={({ item }) => (
          <SimpleMovieBox onSelectMovie={onSelectMovie} {...item} />
        )}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  flatListContainer: {
    height: 280,
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

export default SimpleMovieList;
