import {ScrollView, RefreshControl, Text} from 'react-native';
import React, {useState} from 'react';
import {CustomView, Title} from '../../components';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {colors, globalStyles} from '../../../config/theme/theme';

export const PullToRefreshScreen = () => {
  const [loaded, setLoaded] = useState('');
  const [isRefreshing, setIsRefreshing] = useState(false);

  const {top} = useSafeAreaInsets();

  const onRefresh = () => {
    setIsRefreshing(true);

    setTimeout(() => {
      setLoaded('Loaded!!');
      setIsRefreshing(false);
    }, 2000);
  };
  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={isRefreshing}
          progressViewOffset={top}
          colors={[colors.primary, 'red', 'orange', 'green']}
          onRefresh={onRefresh}
        />
      }
      style={[globalStyles.mainContainer, globalStyles.globalMargin]}>
      <Title text="PullToRefresh" safe />

      {!isRefreshing && <Text>{loaded}</Text>}
    </ScrollView>
  );
};
