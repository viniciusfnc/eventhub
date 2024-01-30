import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "@rneui/themed";
import React from "react";
import MessagesScreen from "../screens/messages/MessagesScreen";
import ProfileScreen from "../screens/profile/ProfileScreen";
import EventsScreen from "../screens/events/EventsScreen";

const Tab = createBottomTabNavigator();

export const MainTabNavigator = () => (
  <Tab.Navigator
    screenOptions={{
      headerShown: false,
      tabBarShowLabel: false,
    }}
  >
    <Tab.Screen
      name="Search"
      component={EventsScreen}
      options={{
        tabBarIcon: ({ color, size }) => <Icon name="search" type="ionicon" />,
      }}
    />
    <Tab.Screen
      name="Messages"
      component={MessagesScreen}
      options={{
        tabBarIcon: ({ color, size }) => <Icon name="chatbox" type="ionicon" />,
      }}
    />
    {/* <Tab.Screen
      name="Profile"
      component={ProfileScreen}
      options={{
        tabBarIcon: ({ color, size }) => <Icon name="person" type="ionicon" />,
      }}
    /> */}
  </Tab.Navigator>
);
