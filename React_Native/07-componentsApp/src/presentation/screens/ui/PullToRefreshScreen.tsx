import {ScrollView, RefreshControl, Text} from 'react-native';
import React, {useState} from 'react';
import {Title} from '../../components';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {globalStyles} from '../../../config/theme/theme';
import {useThemeContext} from '../../hooks/useThemeContext';

export const PullToRefreshScreen = () => {
  const [loaded, setLoaded] = useState('');
  const [isRefreshing, setIsRefreshing] = useState(false);

  const {top} = useSafeAreaInsets();

  const {colors} = useThemeContext();

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
          tintColor={colors.primary}
          progressBackgroundColor={colors.cardBackground}
        />
      }
      style={[
        globalStyles.mainContainer,
        globalStyles.globalMargin,
        {backgroundColor: colors.background},
      ]}>
      <Title text="PullToRefresh" safe />

      {!isRefreshing && <Text>{loaded}</Text>}
    </ScrollView>
  );
};
