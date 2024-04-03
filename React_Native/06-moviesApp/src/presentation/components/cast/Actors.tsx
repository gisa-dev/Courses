import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import type {Cast} from '../../../core/entities/cast.entity';

interface Props {
  actor: Cast;
}

export const Actors = ({actor}: Props) => {
  console.log({actor});
  return (
    <View style={styles.container}>
      <Image
        source={{uri: actor.avatar}}
        style={{width: 100, height: 150, borderRadius: 10}}
      />

      <View style={styles.actorInfo}>
        <Text style={{fontSize: 15, fontWeight: 'bold'}}>{actor.name}</Text>
        <Text style={{fontSize: 12, opacity: 0.7}}>{actor.character}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'red',
    marginRight: 10,
    paddingLeft: 10,
    flex: 1,
    flexDirection: 'column',
    width: 100,
  },
  actorInfo: {
    marginLeft: 10,
    marginTop: 4,
    paddingBottom: 40,
  },
});
