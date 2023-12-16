import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabBarIcon from '../components/TabBarIcon'
import HomeScreen from '../screens/HomeScreen'
import MessagesScreen from '../screens/MessagesScreen'
import ProfileScreen from '../screens/ProfileScreen'
import TopPicksScreen from '../screens/TopPicksScreen'
import { createStackNavigator } from 'react-navigation-stack';
import { Icon } from '@rneui/themed';

const Tab = createBottomTabNavigator();



export const MainTabNavigator = () => (

  <Tab.Navigator>
    <Tab.Screen name="TopPicks" component={TopPicksScreen} options={{
      tabBarLabel: 'Events',
      tabBarIcon: ({ color, size }) => (
        <Icon name='home' type='ionicon'/>
      ),
    }}
    />
    <Tab.Screen name="Match" component={HomeScreen} options={{
      tabBarIcon: ({ color, size }) => (
        <Icon name='heart' type='ionicon'/>
      ),
    }}
    />
    <Tab.Screen name="Messages" component={MessagesScreen} options={{
      tabBarIcon: ({ color, size }) => (
        <Icon name='chatbox' type='ionicon' />
      ),
    }}
    />
    <Tab.Screen name="Profile" component={ProfileScreen} options={{
      tabBarIcon: ({ color, size }) => (
        <Icon name='person' type='ionicon'/>
      ),
    }}
    />
  </Tab.Navigator>

)