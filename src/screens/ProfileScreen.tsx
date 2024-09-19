import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const ProfileScreen: React.FC = () => {
  const [name, setName] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [sex, setSex] = useState('male');
  const [age, setAge] = useState<number | null>(null);
  const [bmi, setBmi] = useState<number | null>(null);
  const [bmr, setBmr] = useState<number | null>(null);

  const calculateAge = (birthDate: string) => {
    const birth = new Date(birthDate);
    const today = new Date();
    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
      age--;
    }
    return age;
  };

  const calculateBMI = () => {
    const heightInMeters = parseFloat(height) / 100;
    const weightInKg = parseFloat(weight);
    const bmi = weightInKg / (heightInMeters * heightInMeters);
    setBmi(bmi);
  };

  const calculateBMR = () => {
    const weightInKg = parseFloat(weight);
    const heightInCm = parseFloat(height);
    const ageValue = calculateAge(birthDate);

    let bmr = 0;
    if (sex === 'male') {
      bmr = 88.36 + (13.4 * weightInKg) + (4.8 * heightInCm) - (5.7 * ageValue);
    } else {
      bmr = 447.6 + (9.2 * weightInKg) + (3.1 * heightInCm) - (4.3 * ageValue);
    }
    setBmr(bmr);
  };

  const handleSubmit = () => {
    if (!name || !birthDate || !height || !weight) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos!');
      return;
    }
    const calculatedAge = calculateAge(birthDate);
    setAge(calculatedAge);
    calculateBMI();
    calculateBMR();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Perfil</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={name}
        onChangeText={setName}
      />

      <TextInput
        style={styles.input}
        placeholder="Data de Nascimento (YYYY-MM-DD)"
        value={birthDate}
        onChangeText={setBirthDate}
      />

      <TextInput
        style={styles.input}
        placeholder="Altura (cm)"
        keyboardType="numeric"
        value={height}
        onChangeText={setHeight}
      />

      <TextInput
        style={styles.input}
        placeholder="Peso (kg)"
        keyboardType="numeric"
        value={weight}
        onChangeText={setWeight}
      />

      <Text style={styles.label}>Sexo:</Text>
      <Picker
        selectedValue={sex}
        style={styles.picker}
        onValueChange={(itemValue) => setSex(itemValue)}
      >
        <Picker.Item label="Masculino" value="male" />
        <Picker.Item label="Feminino" value="female" />
      </Picker>

      <Button title="Calcular" onPress={handleSubmit} />

      {age !== null && (
        <Text style={styles.result}>Idade: {age} anos</Text>
      )}

      {bmi !== null && (
        <Text style={styles.result}>IMC: {bmi.toFixed(2)}</Text>
      )}

      {bmr !== null && (
        <Text style={styles.result}>Taxa Metabólica Basal (TMB): {bmr.toFixed(2)} kcal/dia</Text>
      )}
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
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  picker: {
    height: 50,
    width: '100%',
    marginBottom: 20,
  },
  result: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ProfileScreen;
