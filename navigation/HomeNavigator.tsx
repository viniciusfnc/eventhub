import {
  DrawerContentScrollView,
  createDrawerNavigator,
} from "@react-navigation/drawer";
import React from "react";
import { MainTabNavigator } from "./MainTabNavigator";
import ProfileScreen from "../screens/profile/ProfileScreen";
import CustomDrawerToggleButton from "../components/CustomDrawerToggleButton";
import { Text } from "react-native";
import { Heading, View } from "native-base";
import ProfileMenuScreen from "../screens/profile/ProfileMenuScreen";

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <ProfileMenuScreen></ProfileMenuScreen>
    </DrawerContentScrollView>
  );
}

export const HomeNavigator = () => (
  <Drawer.Navigator
    initialRouteName="Main"
    drawerContent={(props) => <CustomDrawerContent {...props} />}
    screenOptions={{
      headerLeft: () => <View />,
      headerTitle: (props) => <Heading size={"md"}>EVENTHUB</Heading>,
      drawerPosition: "right",
      headerRight: () => <CustomDrawerToggleButton />,
    }}
  >
    <Drawer.Screen name="Main" component={MainTabNavigator} />
    <Drawer.Screen name="Profile" component={ProfileScreen} />
  </Drawer.Navigator>
);
