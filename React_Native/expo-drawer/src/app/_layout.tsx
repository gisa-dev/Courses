import { Ionicons } from '@expo/vector-icons';
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import { useRouter } from 'expo-router';
import { Drawer } from 'expo-router/drawer';
import { Image, Text, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function DrawerLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        drawerContent={CustomDrawerContent}
        screenOptions={{
          drawerHideStatusBarOnOpen: true,
          drawerActiveBackgroundColor: '#5363df',
          drawerActiveTintColor: '#fff',
          drawerLabelStyle: {
            marginLeft: -20,
          },
        }}>
        <Drawer.Screen
          name="index"
          options={{
            headerTitle: 'Home',
            drawerLabel: 'Home',
            drawerIcon: ({ color, size }) => (
              <Ionicons name="home-outline" color={color} size={size} />
            ),
          }}
        />

        <Drawer.Screen
          name="news"
          options={{
            headerTitle: 'News',
            drawerLabel: 'Newsfeed',
            drawerIcon: ({ color, size }) => (
              <Ionicons name="newspaper-outline" color={color} size={size} />
            ),
          }}
        />
        <Drawer.Screen
          name="profile"
          options={{
            headerTitle: 'My Profile',
            drawerLabel: 'Profile',
            drawerIcon: ({ color, size }) => (
              <Ionicons name="person-outline" color={color} size={size} />
            ),
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}

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
          <Text
            style={{
              paddingTop: 10,
              textAlign: 'center',
              fontWeight: '500',
              fontSize: 18,
              color: '#5363df',
            }}>
            User Name
          </Text>
        </View>

        <View style={{ backgroundColor: '#fff' }}>
          <DrawerItemList {...props} />
          <DrawerItem label="Logout" onPress={() => router.replace('/')} />
        </View>
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
