import React, { FunctionComponent, useState } from 'react';

import { StyleSheet, View, StatusBar } from 'react-native';

import colors from '../../../constants/colors';

import { IStatusBarProps } from '../interfaces/status-bar';

import { StackedLogo } from '../../Logos';
import { SearchInput } from '../../Inputs';

interface ISearchBarProps extends IStatusBarProps {}

const SearchBar: FunctionComponent<ISearchBarProps> = () => {
  const [search, setSearch] = useState<string>('');

  const onSearch = (searchText: string) => {
    setSearch(searchText);
  };

  const callSearch = () => {
    console.log('Search for ==>', search);
  };

  return (
    <View style={[styles.container, styles.row]}>
      <StatusBar
        backgroundColor={colors.STATUS_BAR_HOME}
        barStyle="light-content"
      />
      <StackedLogo height={40} width={60} resizeMode="contain" />
      <SearchInput
        onChangeText={onSearch}
        onSubmitEditing={callSearch}
        returnKeyType="done"
        value={search}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.LOGO_HOME_BACKGROUND,
    elevation: 2,
    height: 60,
  },
  row: {
    flexDirection: 'row',
  },
});

export default SearchBar;
