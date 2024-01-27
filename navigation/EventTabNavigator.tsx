import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import EventListScreen from '../screens/events/EventListScreen';
import EventMapScreen from '../screens/events/EventMapScreen';

const Tab = createMaterialTopTabNavigator();

export const EventTabNavigator = () => (

    <Tab.Navigator>
      <Tab.Screen name="EventList" component={EventListScreen} />
      <Tab.Screen name="EventMap" component={EventMapScreen} />
    </Tab.Navigator>
 
 )