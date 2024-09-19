// navigation/AppNavigator.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import RecipesScreen from '../screens/RecipesScreen';
import CalorieTracker from '../screens/CalorieTracker';
import WaterTracker from '../screens/WaterTracker';
import MedicationScreen from '../screens/MedicationScreen';
import RemindersScreen from '../screens/RemindersScreen';

const Stack = createNativeStackNavigator();

const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Recipes" component={RecipesScreen} />
        <Stack.Screen name="CalorieTracker" component={CalorieTracker} />
        <Stack.Screen name="WaterTracker" component={WaterTracker} />
        <Stack.Screen name="Medication" component={MedicationScreen} />
        <Stack.Screen name="Reminders" component={RemindersScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
