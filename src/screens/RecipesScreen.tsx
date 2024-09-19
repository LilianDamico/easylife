import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet, Alert } from 'react-native';

interface Recipe {
  id: string;
  title: string;
  ingredients: string;
  category: 'Vegano' | 'Vegetariano' | 'Sem Restrição';
}

const RecipesScreen: React.FC = () => {
  const [recipeTitle, setRecipeTitle] = useState('');
  const [recipeIngredients, setRecipeIngredients] = useState('');
  const [recipeCategory, setRecipeCategory] = useState<'Vegano' | 'Vegetariano' | 'Sem Restrição'>('Sem Restrição');
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  const addRecipe = () => {
    if (!recipeTitle || !recipeIngredients) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos!');
      return;
    }

    const newRecipe: Recipe = {
      id: Math.random().toString(),
      title: recipeTitle,
      ingredients: recipeIngredients,
      category: recipeCategory,
    };

    setRecipes((prevRecipes) => [...prevRecipes, newRecipe]);
    setRecipeTitle('');
    setRecipeIngredients('');
    setRecipeCategory('Sem Restrição');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Adicionar Nova Receita</Text>

      <TextInput
        style={styles.input}
        placeholder="Título da Receita"
        value={recipeTitle}
        onChangeText={setRecipeTitle}
      />

      <TextInput
        style={styles.input}
        placeholder="Ingredientes"
        value={recipeIngredients}
        onChangeText={setRecipeIngredients}
      />

      <View style={styles.buttonGroup}>
        <Button
          title="Vegano"
          onPress={() => setRecipeCategory('Vegano')}
          color={recipeCategory === 'Vegano' ? 'blue' : 'gray'}
        />
        <Button
          title="Vegetariano"
          onPress={() => setRecipeCategory('Vegetariano')}
          color={recipeCategory === 'Vegetariano' ? 'blue' : 'gray'}
        />
        <Button
          title="Sem Restrição"
          onPress={() => setRecipeCategory('Sem Restrição')}
          color={recipeCategory === 'Sem Restrição' ? 'blue' : 'gray'}
        />
      </View>

      <Button title="Adicionar Receita" onPress={addRecipe} />

      <FlatList
        data={recipes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.recipeItem}>
            <Text>{item.category}: {item.title}</Text>
            <Text>Ingredientes: {item.ingredients}</Text>
          </View>
        )}
      />
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
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  recipeItem: {
    padding: 10,
    backgroundColor: '#e8e8e8',
    marginBottom: 5,
    borderRadius: 5,
  },
});

export default RecipesScreen;
