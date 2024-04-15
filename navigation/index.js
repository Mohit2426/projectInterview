import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../containers/homeScreen';
import GroupsScreen from '../containers/groupsScreen';
import SelectedContacts from '../containers/selectedContacts';
const Stack = createNativeStackNavigator();
const Navigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home"  options={{ headerShown: true }} component={HomeScreen} />
      <Stack.Screen name="GroupScreen"  options={{ headerShown: true,title:'Groups' }} component={GroupsScreen} />
      <Stack.Screen name="Selected Contact"  options={{ headerShown: true,title:'Selected Contacts' }} component={SelectedContacts} />
  </Stack.Navigator>
  )
}

export default Navigation