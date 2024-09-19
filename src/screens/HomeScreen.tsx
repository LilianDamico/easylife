import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

type RootStackParamList = {
  Home: undefined;
  Profile: undefined;
  Recipes: undefined;
  CalorieTracker: undefined;
  WaterTracker: undefined;
  Medication: undefined;
  Reminders: undefined;
};

type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

const HomeScreen: React.FC = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo ao EasyLife!</Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          style={styles.button} 
          onPress={() => navigation.navigate('Profile')}
        >
          <Text style={styles.buttonText}>Profile</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          style={styles.button} 
          onPress={() => navigation.navigate('Recipes')}
        >
          <Text style={styles.buttonText}>Receitas Fitness</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          style={styles.button} 
          onPress={() => navigation.navigate('CalorieTracker')}
        >
          <Text style={styles.buttonText}>Acompanhamento de Calorias</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          style={styles.button} 
          onPress={() => navigation.navigate('WaterTracker')}
        >
          <Text style={styles.buttonText}>Acompanhamento de Água</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          style={styles.button} 
          onPress={() => navigation.navigate('Medication')}
        >
          <Text style={styles.buttonText}>Medicação e Lembretes</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          style={styles.button} 
          onPress={() => navigation.navigate('Reminders')}
        >
          <Text style={styles.buttonText}>Lembretes de Consultas e Exercícios</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(0, 0, 50)',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#9ACD32',  // Cor yellowgreen
  },
  buttonContainer: {
    marginVertical: 10,  
    width: '80%',        
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 2,  // Espessura da borda
    borderColor: '#ADFF2F',  // Borda verde-limão
    borderRadius: 5,  // Bordas arredondadas
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',  // Cor do texto
    fontSize: 16,
  },
});

export default HomeScreen;
