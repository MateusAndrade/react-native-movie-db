import React, { FunctionComponent } from 'react';

import { StyleSheet, Text, View, StatusBar } from 'react-native';

import colors from '../../../constants/colors';

import { IStatusBarProps } from '../interfaces/status-bar';

import { StackedLogo } from '../../Logos';

interface ISearchBarProps extends IStatusBarProps {}

const SearchBar: FunctionComponent<ISearchBarProps> = () => {
  return (
    <View style={[styles.container, styles.row]}>
      <StatusBar
        backgroundColor={colors.STATUS_BAR_HOME}
        barStyle="light-content"
      />
      <StackedLogo height={40} width={60} resizeMode="contain" />
      <Text>SearchBar</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.LOGO_HOME_BACKGROUND,
    height: 60,
  },
  row: {
    flexDirection: 'row',
  },
});

export default SearchBar;
