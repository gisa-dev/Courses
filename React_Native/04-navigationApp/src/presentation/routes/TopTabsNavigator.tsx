import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {AboutScreen, ProfileScreen} from '../screens';
import {HamburgerMenu} from '../components/shared/HamburgerMenu';

const Tab = createMaterialTopTabNavigator();

export const TopTabsNavigator = () => {
  return (
    <>
      <HamburgerMenu />
      <Tab.Navigator>
        <Tab.Screen name="Profile" component={ProfileScreen} />
        <Tab.Screen name="About" component={AboutScreen} />
      </Tab.Navigator>
    </>
  );
};
