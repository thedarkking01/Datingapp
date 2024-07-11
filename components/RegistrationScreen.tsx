// import React, { useState } from 'react';
// import { View, Text, TextInput, StyleSheet, Pressable, ScrollView, ImageBackground, GestureResponderEvent } from 'react-native';
// import DateTimePicker from '@react-native-community/datetimepicker';

// const RegistrationScreen: React.FC = () => {
//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [dob, setDob] = useState(new Date());
//   const [showDatePicker, setShowDatePicker] = useState(false);
//   const [totalIncome, setTotalIncome] = useState('');
//   const [horoscope, setHoroscope] = useState('');
//   const [image, setImage] = useState(''); // URL or base64 for user image

//   const handleRegister = () => {
//     console.log('Register:', { username, email, password, firstName, lastName, dob, totalIncome, horoscope, image });
//   };

//   const onPress = (event: GestureResponderEvent): void => {
//     handleRegister();
//   };

//   const onChangeDate = (event: any, selectedDate: Date | undefined) => {
//     setShowDatePicker(false);
//     if (selectedDate) {
//       setDob(selectedDate);
//     }
//   };

//   return (
//     <ImageBackground source={require('../assets/images/couple.jpg')} style={styles.backgroundImage}>
//       <View style={styles.overlay} />
//       <ScrollView contentContainerStyle={styles.container}>
//         <Text style={styles.title}>REGISTER</Text>
//         <TextInput
//           style={styles.input}
//           placeholder="First Name"
//           value={firstName}
//           onChangeText={setFirstName}
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Last Name"
//           value={lastName}
//           onChangeText={setLastName}
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Username"
//           value={username}
//           onChangeText={setUsername}
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Email"
//           value={email}
//           onChangeText={setEmail}
//           keyboardType="email-address"
//           autoCapitalize="none"
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Password"
//           value={password}
//           onChangeText={setPassword}
//           secureTextEntry
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Total Income"
//           value={totalIncome}
//           onChangeText={setTotalIncome}
//           keyboardType="numeric"
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Horoscope Sign"
//           value={horoscope}
//           onChangeText={setHoroscope}
//         />
//         <Pressable style={styles.datePickerButton} onPress={() => setShowDatePicker(true)}>
//           <Text style={styles.datePickerText}>Select Date of Birth</Text>
//         </Pressable>
//         {showDatePicker && (
//           <DateTimePicker
//             value={dob}
//             mode="date"
//             display="default"
//             onChange={onChangeDate}
//           />
//         )}
//         {/* You can replace the TextInput with an image picker */}
//         <TextInput
//           style={styles.input}
//           placeholder="User Image URL"
//           value={image}
//           onChangeText={setImage}
//         />
//         <Pressable style={styles.button} onPress={onPress}>
//           <Text style={styles.buttonText}>SIGNUP</Text>
//         </Pressable>
//         <Pressable style={styles.signInLink} onPress={() => console.log('Navigate to Sign In screen')}>
//           <Text style={styles.signInText}>Already have an account? Sign In</Text>
//         </Pressable>
//       </ScrollView>
//     </ImageBackground>
//   );
// };

// const styles = StyleSheet.create({
//   backgroundImage: {
//     flex: 1,
//     resizeMode: 'cover',
//     justifyContent: 'center',
//   },
//   overlay: {
//     ...StyleSheet.absoluteFillObject,
//     backgroundColor: 'rgba(250, 250, 250, 0)', // semi-transparent white overlay
//   },
//   container: {
//     flexGrow: 1,
//     justifyContent: 'center',
//     padding: 16,
//     backgroundColor: 'rgba(255, 255, 255, 0.2)', // semi-transparent background to make text readable
//   },
//   title: {
//     fontSize: 32,
//     marginBottom: 16,
//     textAlign: 'center',
//     color: '#0056b3',
//     fontWeight: 'bold',
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: '#ccc',
//     padding: 12,
//     marginVertical: 8,
//     borderRadius: 8,
//     backgroundColor: '#fff',
//     fontSize: 16,
//   },
//   button: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     paddingVertical: 16,
//     paddingHorizontal: 32,
//     borderRadius: 8,
//     backgroundColor: '#ff6600',
//     marginTop: 16,
//   },
//   buttonText: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: 'white',
//   },
//   datePickerButton: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     paddingVertical: 12,
//     paddingHorizontal: 32,
//     borderRadius: 8,
//     backgroundColor: '#ccc',
//     marginVertical: 8,
//   },
//   datePickerText: {
//     fontSize: 16,
//     color: '#333',
//   },
//   signInLink: {
//     marginTop: 16,
//     alignItems: 'center',
//   },
//   signInText: {
//     fontSize: 14,
//     color: 'white',
//   },
// });

// export default RegistrationScreen;

import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Pressable, ScrollView, ImageBackground, GestureResponderEvent } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import Icon from 'react-native-vector-icons/FontAwesome';

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
    <ImageBackground source={require('../assets/images/couple.jpg')} style={styles.backgroundImage}>
      <View style={styles.overlay} />
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>REGISTER</Text>
        <View style={styles.inputContainer}>
          <Icon name="user" size={20} color="white" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="First Name"
            value={firstName}
            onChangeText={setFirstName}
          />
        </View>
        <View style={styles.inputContainer}>
          <Icon name="user" size={20} color="white" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Last Name"
            value={lastName}
            onChangeText={setLastName}
          />
        </View>
        <View style={styles.inputContainer}>
          <Icon name="user" size={20} color="white" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Username"
            value={username}
            onChangeText={setUsername}
          />
        </View>
        <View style={styles.inputContainer}>
          <Icon name="envelope" size={20} color="white" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>
        <View style={styles.inputContainer}>
          <Icon name="lock" size={20} color="white" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
        </View>
        <View style={styles.inputContainer}>
          <Icon name="dollar" size={20} color="white" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Total Income"
            value={totalIncome}
            onChangeText={setTotalIncome}
            keyboardType="numeric"
          />
        </View>
        <View style={styles.inputContainer}>
          <Icon name="star" size={20} color="white" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Horoscope Sign"
            value={horoscope}
            onChangeText={setHoroscope}
          />
        </View>
        <Pressable style={styles.datePickerButton} onPress={() => setShowDatePicker(true)}>
          <Text style={styles.datePickerText}>Select Date of Birth</Text>
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
        <View style={styles.inputContainer}>
          <Icon name="image" size={20} color="white" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="User Image URL"
            value={image}
            onChangeText={setImage}
          />
        </View>
        <Pressable style={styles.button} onPress={onPress}>
          <Text style={styles.buttonText}>SIGNUP</Text>
        </Pressable>
        <Pressable style={styles.signInLink} onPress={() => console.log('Navigate to Sign In screen')}>
          <Text style={styles.signInText}>Already have an account? Sign In</Text>
        </Pressable>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // semi-transparent black overlay
  },
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.2)', // semi-transparent background to make text readable
  },
  title: {
    fontSize: 32,
    marginBottom: 16,
    textAlign: 'center',
    // color: '#0056b3',
    color: 'white', 
    fontWeight: 'bold',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: 'white', // red bottom border color
  },
  icon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    paddingVertical: 12,
    backgroundColor: 'transparent',
    fontSize: 16,
    color: 'white',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 8,
    backgroundColor: '#ff6600',
    marginTop: 16,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  datePickerButton: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
    backgroundColor: '#ccc',
    marginVertical: 8,
  },
  datePickerText: {
    fontSize: 16,
    color: '#333',
  },
  signInLink: {
    marginTop: 16,
    alignItems: 'center',
  },
  signInText: {
    fontSize: 14,
    color: 'white',
  },
});

export default RegistrationScreen;
