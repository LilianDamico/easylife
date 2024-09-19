import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';

interface FoodEntry {
  id: string;
  name: string;
  calories: number;
}

const CalorieTracker: React.FC = () => {
  const [foodName, setFoodName] = useState('');
  const [calories, setCalories] = useState('');
  const [foodEntries, setFoodEntries] = useState<FoodEntry[]>([]);

  const addFoodEntry = () => {
    if (foodName && calories) {
      const newEntry: FoodEntry = {
        id: Math.random().toString(),
        name: foodName,
        calories: parseFloat(calories),
      };
      setFoodEntries([...foodEntries, newEntry]);
      setFoodName('');
      setCalories('');
    }
  };

  const totalCalories = foodEntries.reduce((total, entry) => total + entry.calories, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Acompanhamento de Calorias</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Nome do Alimento"
        value={foodName}
        onChangeText={setFoodName}
      />
      
      <TextInput
        style={styles.input}
        placeholder="Calorias"
        value={calories}
        keyboardType="numeric"
        onChangeText={setCalories}
      />

      <Button title="Adicionar Alimento" onPress={addFoodEntry} />

      <FlatList
        data={foodEntries}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.foodItem}>
            <Text>{item.name}: {item.calories} cal</Text>
          </View>
        )}
      />

      <Text style={styles.total}>Total de Calorias: {totalCalories} cal</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f8f8',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  foodItem: {
    padding: 10,
    backgroundColor: '#e8e8e8',
    marginBottom: 5,
    borderRadius: 5,
  },
  total: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default CalorieTracker;  // Certifique-se de exportar o componente
