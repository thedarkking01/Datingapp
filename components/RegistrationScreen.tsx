import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Pressable, GestureResponderEvent, ScrollView } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const RegistrationScreen: React.FC = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dob, setDob] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [totalIncome, setTotalIncome] = useState('');
  const [horoscope, setHoroscope] = useState('');
  const [image, setImage] = useState(''); // URL or base64 for user image

  const handleRegister = () => {
    console.log('Register:', { username, email, password, firstName, lastName, dob, totalIncome, horoscope, image });
  };

  const onPress = (event: GestureResponderEvent): void => {
    handleRegister();
  };

  const onChangeDate = (event: any, selectedDate: Date | undefined) => {
    setShowDatePicker(false);
    if (selectedDate) {
      setDob(selectedDate);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Register</Text>
      <TextInput
        style={styles.input}
        placeholder="First Name"
        value={firstName}
        onChangeText={setFirstName}
      />
      <TextInput
        style={styles.input}
        placeholder="Last Name"
        value={lastName}
        onChangeText={setLastName}
      />
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        placeholder="Total Income"
        value={totalIncome}
        onChangeText={setTotalIncome}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Horoscope Sign"
        value={horoscope}
        onChangeText={setHoroscope}
      />
      <Pressable style={styles.datePickerButton} onPress={() => setShowDatePicker(true)}>
        <Text style={styles.text}>Select Date of Birth</Text>
      </Pressable>
      {showDatePicker && (
        <DateTimePicker
          value={dob}
          mode="date"
          display="default"
          onChange={onChangeDate}
        />
      )}
      {/* You can replace the TextInput with an image picker */}
      <TextInput
        style={styles.input}
        placeholder="User Image URL"
        value={image}
        onChangeText={setImage}
      />
      <Pressable style={styles.button} onPress={onPress}>
        <Text style={styles.text}>REGISTER</Text>
      </Pressable>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginVertical: 8,
    borderRadius: 4,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  datePickerButton: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    backgroundColor: 'gray',
    marginVertical: 8,
  },
});

export default RegistrationScreen;
