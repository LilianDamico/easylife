import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TextInput, Alert } from 'react-native';

const WaterTracker: React.FC = () => {
  const [waterGoal, setWaterGoal] = useState<number>(2000); // Meta de ingestão de água em ml
  const [waterIntake, setWaterIntake] = useState<number>(0); // Ingestão de água atual

  const addWater = (amount: number) => {
    if (waterIntake + amount > waterGoal) {
      Alert.alert("Parabéns!", "Você atingiu sua meta de ingestão de água para hoje!");
    }
    setWaterIntake(waterIntake + amount);
  };

  const resetWaterIntake = () => {
    setWaterIntake(0);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Acompanhamento de Ingestão de Água</Text>
      
      <Text style={styles.label}>Meta Diária de Água (ml):</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={waterGoal.toString()}
        onChangeText={(value) => setWaterGoal(parseInt(value) || 0)}
      />
      
      <Text style={styles.label}>Água Consumida (ml): {waterIntake} ml</Text>
      
      <View style={styles.buttonGroup}>
        <Button title="Beber 200ml" onPress={() => addWater(200)} />
        <Button title="Beber 500ml" onPress={() => addWater(500)} />
      </View>

      <Button title="Resetar Ingestão de Água" onPress={resetWaterIntake} />
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
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
});

export default WaterTracker;
