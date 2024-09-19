import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet, Alert } from 'react-native';

interface Medication {
  id: string;
  name: string;
  dosage: string;
  time: string;
}

const MedicationScreen: React.FC = () => {
  const [medicationName, setMedicationName] = useState('');
  const [dosage, setDosage] = useState('');
  const [time, setTime] = useState('');
  const [medications, setMedications] = useState<Medication[]>([]);

  const addMedication = () => {
    if (!medicationName || !dosage || !time) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos!');
      return;
    }

    const newMedication: Medication = {
      id: Math.random().toString(),
      name: medicationName,
      dosage: dosage,
      time: time,
    };

    setMedications((prevMedications) => [...prevMedications, newMedication]);
    setMedicationName('');
    setDosage('');
    setTime('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Gerenciar Medicação</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome do Medicamento"
        value={medicationName}
        onChangeText={setMedicationName}
      />

      <TextInput
        style={styles.input}
        placeholder="Dosagem (ex: 500mg)"
        value={dosage}
        onChangeText={setDosage}
      />

      <TextInput
        style={styles.input}
        placeholder="Horário (ex: 08:00)"
        value={time}
        onChangeText={setTime}
      />

      <Button title="Adicionar Medicação" onPress={addMedication} />

      <FlatList
        data={medications}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.medicationItem}>
            <Text>Medicamento: {item.name}</Text>
            <Text>Dosagem: {item.dosage}</Text>
            <Text>Horário: {item.time}</Text>
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
  medicationItem: {
    padding: 10,
    backgroundColor: '#e8e8e8',
    marginBottom: 5,
    borderRadius: 5,
  },
});

export default MedicationScreen;
