import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from '@rneui/themed';
import React from 'react';
import MessagesScreen from '../screens/messages/MessagesScreen';
import ProfileScreen from '../screens/profile/ProfileScreen';
import EventsScreen from '../screens/events/EventsScreen';

const Tab = createBottomTabNavigator();


export const MainTabNavigator = () => (

  <Tab.Navigator >
    <Tab.Screen name="Buscar Eventos" component={EventsScreen} options={{
      tabBarLabel: 'Events',
      tabBarIcon: ({ color, size }) => (
        <Icon name='home' type='ionicon'/>
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