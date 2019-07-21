import React, { FunctionComponent } from 'react';

import { StyleSheet, TextInput, View, TextInputProps } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import colors from '../../../constants/colors';

interface ISearchInputProps extends Partial<TextInputProps> {}

const SearchInput: FunctionComponent<ISearchInputProps> = props => {
  return (
    <View style={styles.container}>
      <Icon name="ios-search" size={30} color={colors.GREY_PLACEHOLDER} />
      <TextInput
        {...props}
        placeholder="Search for a Movie, People or TV show"
        style={styles.input}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.WHITE,
    flexDirection: 'row',
    paddingLeft: 10,
    height: 40,
    borderRadius: 20,
  },
  input: {
    borderBottomRightRadius: 20,
    borderTopRightRadius: 20,
    fontFamily: 'Source Sans Pro',
  },
});

export default SearchInput;
