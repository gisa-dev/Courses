import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import { useRouter } from 'expo-router';
import { Image, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const CustomDrawerContent = (props: any) => {
  const router = useRouter();
  const { top, bottom } = useSafeAreaInsets();
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView
        {...props}
        scrollEnabled={false}
        contentContainerStyle={{ backgroundColor: '#dde3fe' }}>
        <View style={{ padding: 20 }}>
          <Image
            source={{ uri: 'https://i.pravatar.cc/300' }}
            style={{ width: 100, height: 100, alignSelf: 'center', borderRadius: 50 }}
          />
        </View>
        <DrawerItemList {...props} />
        <DrawerItem label="Logout" onPress={() => router.replace('/')} />
      </DrawerContentScrollView>

      <View
        style={{
          borderTopColor: '#dde3fe',
          borderTopWidth: 1,
          padding: 20,
          paddingBottom: bottom + 20,
        }}>
        <Text>Footer</Text>
      </View>
    </View>
  );
};

export default CustomDrawerContent;
