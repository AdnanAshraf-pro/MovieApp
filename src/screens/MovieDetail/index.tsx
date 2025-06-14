import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import useMovieDetail from './useMovieDetail';

const index = props => {
  const { movieId } = props.route.param;
  const { movieDetail } = useMovieDetail(movieId);
  return (
    <View>
      <Text>index</Text>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({});
