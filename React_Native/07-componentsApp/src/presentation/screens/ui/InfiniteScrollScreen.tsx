import {View, FlatList, Image, ActivityIndicator} from 'react-native';
import React, {useState} from 'react';
import {colors} from '../../../config/theme/theme';
import {FadeInImage} from '../../components';

export const InfiniteScrollScreen = () => {
  const [numbers, setNumbers] = useState([0, 1, 2, 3, 4, 5]);

  const loadMore = () => {
    const newArray = Array.from({length: 5}, (_, i) => numbers.length + i);

    setTimeout(() => {
      setNumbers([...numbers, ...newArray]);
    }, 3000);
  };

  return (
    <View style={{backgroundColor: 'black'}}>
      <FlatList
        data={numbers}
        keyExtractor={item => item.toString()}
        onEndReached={loadMore}
        onEndReachedThreshold={0.6}
        renderItem={({item}) => <ListItem number={item} />}
        ListFooterComponent={
          <View style={{height: 150, justifyContent: 'center'}}>
            <ActivityIndicator color={colors.primary} size={40} />
          </View>
        }
      />
    </View>
  );
};

interface ListItemProps {
  number: number;
}

const ListItem = ({number}: ListItemProps) => {
  return (
    <FadeInImage
      uri={`https://picsum.photos/id/${number}/500/400`}
      style={{
        height: 400,
        width: '100%',
      }}
    />
    // <Image
    //   source={{uri: `https://picsum.photos/id/${number}/500/400`}}
    //   style={{
    //     height: 400,
    //     width: '100%',
    //   }}
    // />
  );
};
