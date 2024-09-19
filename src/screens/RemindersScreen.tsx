import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet, Alert } from 'react-native';

interface Reminder {
  id: string;
  title: string;
  date: string;
  type: 'Consulta' | 'Exame' | 'Exercício';
}

const RemindersScreen: React.FC = () => {
  const [reminderTitle, setReminderTitle] = useState('');
  const [reminderDate, setReminderDate] = useState('');
  const [reminderType, setReminderType] = useState<'Consulta' | 'Exame' | 'Exercício'>('Consulta');
  const [reminders, setReminders] = useState<Reminder[]>([]);

  const addReminder = () => {
    if (!reminderTitle || !reminderDate) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos!');
      return;
    }

    const newReminder: Reminder = {
      id: Math.random().toString(),
      title: reminderTitle,
      date: reminderDate,
      type: reminderType,
    };

    setReminders((prevReminders) => [...prevReminders, newReminder]);
    setReminderTitle('');
    setReminderDate('');
    setReminderType('Consulta');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Gerenciar Lembretes</Text>

      <TextInput
        style={styles.input}
        placeholder="Título do Lembrete"
        value={reminderTitle}
        onChangeText={setReminderTitle}
      />

      <TextInput
        style={styles.input}
        placeholder="Data (YYYY-MM-DD)"
        value={reminderDate}
        onChangeText={setReminderDate}
      />

      <View style={styles.buttonGroup}>
        <Button
          title="Consulta"
          onPress={() => setReminderType('Consulta')}
          color={reminderType === 'Consulta' ? 'blue' : 'gray'}
        />
        <Button
          title="Exame"
          onPress={() => setReminderType('Exame')}
          color={reminderType === 'Exame' ? 'blue' : 'gray'}
        />
        <Button
          title="Exercício"
          onPress={() => setReminderType('Exercício')}
          color={reminderType === 'Exercício' ? 'blue' : 'gray'}
        />
      </View>

      <Button title="Adicionar Lembrete" onPress={addReminder} />

      <FlatList
        data={reminders}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.reminderItem}>
            <Text>{item.type}: {item.title} em {item.date}</Text>
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
  reminderItem: {
    padding: 10,
    backgroundColor: '#e8e8e8',
    marginBottom: 5,
    borderRadius: 5,
  },
});

export default RemindersScreen;
