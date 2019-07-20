import React, { FunctionComponent } from 'react';

import { Text, View } from 'react-native';

import { IStatusBarProps } from '../interfaces/status-bar';

interface ISearchBarProps extends IStatusBarProps {}

const SearchBar: FunctionComponent<ISearchBarProps> = () => {
  return (
    <View>
      <Text>SearchBar</Text>
    </View>
  );
};

export default SearchBar;
