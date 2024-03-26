import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Tab1Screen, Tab2Screen, Tab3Screen} from '../screens';
import {globalColors} from '../theme/theme';
import {Text} from 'react-native';
import {TopTabsNavigator} from './TopTabsNavigator';
import {StackNavigator} from './StackNavigator';
import IonIcon from '../components/shared/IonIcon';

const Tab = createBottomTabNavigator();

export const BottomTabsNavigator = () => {
  return (
    <Tab.Navigator
      sceneContainerStyle={{
        backgroundColor: globalColors.background,
      }}
      screenOptions={{
        // headerShown: false,
        tabBarLabelStyle: {
          marginBottom: 5,
        },
        headerStyle: {
          elevation: 0,
          borderColor: 'transparent',
          shadowColor: 'transparent',
        },
        tabBarStyle: {
          borderTopWidth: 0,
          elevation: 0,
        },
      }}>
      <Tab.Screen
        name="Tab1"
        options={{
          title: 'Tab1',
          tabBarIcon: props => (
            <IonIcon name="airplane-outline" color={props.color} />
          ),
        }}
        component={Tab1Screen}
      />
      <Tab.Screen
        name="TopTabs"
        options={{
          title: 'TopTabs',
          tabBarIcon: props => (
            <IonIcon name="business-outline" color={props.color} />
          ),
        }}
        component={TopTabsNavigator}
      />
      <Tab.Screen
        name="Stack"
        options={{
          title: 'Stack',
          tabBarIcon: props => (
            <IonIcon name="chatbubbles-outline" color={props.color} />
          ),
        }}
        component={StackNavigator}
      />
    </Tab.Navigator>
  );
};
