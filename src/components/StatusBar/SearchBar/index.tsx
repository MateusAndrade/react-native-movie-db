import React, { FunctionComponent } from 'react';

import { StyleSheet, Text, View } from 'react-native';

import { IStatusBarProps } from '../interfaces/status-bar';

import { StackedLogo } from '../../Logos';

interface ISearchBarProps extends IStatusBarProps {}

const SearchBar: FunctionComponent<ISearchBarProps> = () => {
  return (
    <View style={[styles.container, styles.row]}>
      <StackedLogo height={30} width={40} resizeMode="contain" />
      <Text>SearchBar</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    height: 50,
  },
  row: {
    flexDirection: 'row',
  },
});

export default SearchBar;
