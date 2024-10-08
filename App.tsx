import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import RecipesScreen from './src/screens/RecipesScreen';
import CalorieTracker from './src/screens/CalorieTracker';
import WaterTracker from './src/screens/WaterTrack';
import MedicationScreen from './src/screens/MadicationScreen';
import RemindersScreen from './src/screens/RemindersScreen';

const Stack = createNativeStackNavigator();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Recipes" component={RecipesScreen} />
        <Stack.Screen name="CalorieTracker" component={CalorieTracker} />
        <Stack.Screen name="WaterTracker" component={WaterTracker} />
        <Stack.Screen name="Medication" component={MedicationScreen} />
        <Stack.Screen name="Reminders" component={RemindersScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

