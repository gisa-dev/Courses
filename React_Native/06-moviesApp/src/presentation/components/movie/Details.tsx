import {View, Text, FlatList} from 'react-native';
import React from 'react';
import {Formatter} from '../../../config/helpers/formatter';
import type {Cast} from '../../../core/entities/cast.entity';
import {Actors} from '../cast/Actors';

interface Props {
  rating: number;
  genres: string[];
  description: string;
  budget: number;
  cast: Cast[];
}

export const Details = ({rating, genres, description, budget, cast}: Props) => {
  return (
    <>
      <View style={{marginHorizontal: 20}}>
        <View style={{flexDirection: 'row'}}>
          <Text>{rating}</Text>
          <Text style={{marginLeft: 5}}> - {genres.join(', ')}</Text>
        </View>
        <Text style={{fontSize: 23, marginTop: 10, fontWeight: 'bold'}}>
          Story
        </Text>
        <Text style={{fontSize: 16}}>{description}</Text>
        <Text style={{fontSize: 23, marginTop: 10, fontWeight: 'bold'}}>
          Budget
        </Text>
        <Text style={{fontSize: 18}}>{Formatter.currency(budget)}</Text>
      </View>

      {/* Casting */}
      <View style={{marginTop: 10, marginBottom: 50}}>
        <Text
          style={{
            fontSize: 23,
            marginVertical: 10,
            fontWeight: 'bold',
            marginHorizontal: 20,
          }}>
          Actors
        </Text>
        <FlatList
          data={cast}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => <Actors actor={item} />}
        />
      </View>
    </>
  );
};
