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

// import React, { useState } from 'react';
// import { View, Text, TextInput, StyleSheet, Pressable, ScrollView, ImageBackground, GestureResponderEvent } from 'react-native';
// import DateTimePicker from '@react-native-community/datetimepicker';
// import Icon from 'react-native-vector-icons/FontAwesome';

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
//         <View style={styles.inputContainer}>
//           <Icon name="user" size={20} color="white" style={styles.icon} />
//           <TextInput
//             style={styles.input}
//             placeholder="First Name"
//             value={firstName}
//             onChangeText={setFirstName}
//           />
//         </View>
//         <View style={styles.inputContainer}>
//           <Icon name="user" size={20} color="white" style={styles.icon} />
//           <TextInput
//             style={styles.input}
//             placeholder="Last Name"
//             value={lastName}
//             onChangeText={setLastName}
//           />
//         </View>
//         <View style={styles.inputContainer}>
//           <Icon name="user" size={20} color="white" style={styles.icon} />
//           <TextInput
//             style={styles.input}
//             placeholder="Username"
//             value={username}
//             onChangeText={setUsername}
//           />
//         </View>
//         <View style={styles.inputContainer}>
//           <Icon name="envelope" size={20} color="white" style={styles.icon} />
//           <TextInput
//             style={styles.input}
//             placeholder="Email"
//             value={email}
//             onChangeText={setEmail}
//             keyboardType="email-address"
//             autoCapitalize="none"
//           />
//         </View>
//         <View style={styles.inputContainer}>
//           <Icon name="lock" size={20} color="white" style={styles.icon} />
//           <TextInput
//             style={styles.input}
//             placeholder="Password"
//             value={password}
//             onChangeText={setPassword}
//             secureTextEntry
//           />
//         </View>
//         <View style={styles.inputContainer}>
//           <Icon name="dollar" size={20} color="white" style={styles.icon} />
//           <TextInput
//             style={styles.input}
//             placeholder="Total Income"
//             value={totalIncome}
//             onChangeText={setTotalIncome}
//             keyboardType="numeric"
//           />
//         </View>
//         <View style={styles.inputContainer}>
//           <Icon name="star" size={20} color="white" style={styles.icon} />
//           <TextInput
//             style={styles.input}
//             placeholder="Horoscope Sign"
//             value={horoscope}
//             onChangeText={setHoroscope}
//           />
//         </View>
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
//         <View style={styles.inputContainer}>
//           <Icon name="image" size={20} color="white" style={styles.icon} />
//           <TextInput
//             style={styles.input}
//             placeholder="User Image URL"
//             value={image}
//             onChangeText={setImage}
//           />
//         </View>
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
//     backgroundColor: 'rgba(0, 0, 0, 0.5)', // semi-transparent black overlay
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
//     // color: '#0056b3',
//     color: 'white', 
//     fontWeight: 'bold',
//   },
//   inputContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginVertical: 8,
//     borderBottomWidth: 1,
//     borderBottomColor: 'white', // red bottom border color
//   },
//   icon: {
//     marginRight: 8,
//   },
//   input: {
//     flex: 1,
//     paddingVertical: 12,
//     backgroundColor: 'transparent',
//     fontSize: 16,
//     color: 'white',
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

// import React, { useState } from 'react';
// import { View, Text, TextInput, StyleSheet, Pressable, ScrollView, ImageBackground, GestureResponderEvent } from 'react-native';
// import DateTimePicker from '@react-native-community/datetimepicker';
// import Icon from 'react-native-vector-icons/FontAwesome';

// const RegistrationScreen: React.FC = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [dob, setDob] = useState(new Date());
//   const [rockstarName, setRockstarName] = useState('');
//   const [link, setLink] = useState('');
//   const [showDatePicker, setShowDatePicker] = useState(false);
//   const [emailError, setEmailError] = useState('');

//   const handleRegister = () => {
//     if (!email.includes('@')) {
//       setEmailError('Please enter a valid email id');
//       return;
//     }
//     console.log('Register:', { name, email, dob, rockstarName, link });
//   };

//   const onChangeDate = (event: any, selectedDate: Date | undefined) => {
//     setShowDatePicker(false);
//     if (selectedDate) {
//       setDob(selectedDate);
//     }
//   };

//   return (
//     <ImageBackground source={require('../assets/images/couple.jpg')} style={styles.backgroundImage}>
//       <ScrollView contentContainerStyle={styles.container}>
//         <Text style={styles.title}>Lets Meet</Text>
//         <Text style={styles.subtitle}>Registration form</Text>
//         <Text style={styles.description}>Fill out the form below to be one of the contestants!</Text>
//         <View style={styles.inputContainer}>
//           <TextInput
//             style={styles.input}
//             placeholder="Name"
//             placeholderTextColor="#aaa"
//             value={name}
//             onChangeText={setName}
//           />
//         </View>
//         <View style={styles.inputContainer}>
//           <TextInput
//             style={[styles.input, emailError ? styles.inputError : null]}
//             placeholder="Email id"
//             placeholderTextColor="#aaa"
//             value={email}
//             onChangeText={setEmail}
//             keyboardType="email-address"
//             autoCapitalize="none"
//           />
//           {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}
//         </View>
//         <Pressable style={styles.datePickerButton} onPress={() => setShowDatePicker(true)}>
//           <Text style={styles.datePickerText}>Date of birth</Text>
//         </Pressable>
//         {showDatePicker && (
//           <DateTimePicker
//             value={dob}
//             mode="date"
//             display="default"
//             onChange={onChangeDate}
//           />
//         )}
//         <View style={styles.inputContainer}>
//           <TextInput
//             style={styles.input}
//             placeholder="Rockstar name"
//             placeholderTextColor="#aaa"
//             value={rockstarName}
//             onChangeText={setRockstarName}
//           />
//         </View>
//         <View style={styles.inputContainer}>
//           <TextInput
//             style={styles.input}
//             placeholder="Link (Youtube or similar)"
//             placeholderTextColor="#aaa"
//             value={link}
//             onChangeText={setLink}
//           />
//         </View>
//         <Pressable style={styles.button} onPress={handleRegister}>
//           <Text style={styles.buttonText}>Submit</Text>
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
//   container: {
//     flexGrow: 1,
//     justifyContent: 'center',
//     padding: 16,
//   },
//   title: {
//     fontSize: 32,
//     marginBottom: 16,
//     textAlign: 'center',
//     color: 'orange',
//     fontWeight: 'bold',
//   },
//   subtitle: {
//     fontSize: 24,
//     marginBottom: 8,
//     textAlign: 'center',
//     color: 'orange',
//   },
//   description: {
//     fontSize: 16,
//     marginBottom: 16,
//     textAlign: 'center',
//     color: 'white',
//   },
//   inputContainer: {
//     marginBottom: 12,
//   },
//   input: {
//     padding: 12,
//     borderColor: 'white',
//     borderWidth: 1,
//     borderRadius: 8,
//     color: 'white',
//     backgroundColor: 'rgba(255, 255, 255, 0.2)',
//   },
//   inputError: {
//     borderColor: 'red',
//   },
//   errorText: {
//     color: 'red',
//     marginTop: 4,
//   },
//   datePickerButton: {
//     padding: 12,
//     borderColor: 'white',
//     borderWidth: 1,
//     borderRadius: 8,
//     backgroundColor: 'rgba(255, 255, 255, 0.2)',
//     marginBottom: 12,
//   },
//   datePickerText: {
//     color: 'white',
//     textAlign: 'center',
//   },
//   button: {
//     padding: 16,
//     borderRadius: 8,
//     backgroundColor: '#ff6600',
//     alignItems: 'center',
//   },
//   buttonText: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: 'white',
//   },
// });

// export default RegistrationScreen;


// import React, { useState } from 'react';
// import { View, Text, TextInput, StyleSheet, Pressable, ScrollView, ImageBackground, GestureResponderEvent, Alert } from 'react-native';
// import DateTimePicker from '@react-native-community/datetimepicker';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import axios from 'axios';

// const RegistrationScreen: React.FC = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [dob, setDob] = useState(new Date());
//   const [rockstarName, setRockstarName] = useState('');
//   const [link, setLink] = useState('');
//   const [showDatePicker, setShowDatePicker] = useState(false);
//   const [emailError, setEmailError] = useState('');

//   const handleRegister = async () => {
//     if (!email.includes('@')) {
//       setEmailError('Please enter a valid email id');
//       return;
//     }

//     try {
//       const response = await axios.post('http://127.0.0.1:8000/api/users/', {
//         name,
//         email,
//         dob: dob.toISOString().split('T')[0], // Format date to 'YYYY-MM-DD'
//         rockstar_name: rockstarName,
//         link,
//       });

//       if (response.status === 201) {
//         Alert.alert('Registration Successful', 'You have been registered successfully!');
//         console.log('Registration response:', response.data);
//       }
//     } catch (error) {
//       Alert.alert('Registration Failed', 'There was an error with your registration. Please try again.');
//       console.error('Registration error:', error);
//     }
//   };

//   const onChangeDate = (event: any, selectedDate: Date | undefined) => {
//     setShowDatePicker(false);
//     if (selectedDate) {
//       setDob(selectedDate);
//     }
//   };

//   return (
//     <ImageBackground source={require('../assets/images/couple.jpg')} style={styles.backgroundImage}>
//       <ScrollView contentContainerStyle={styles.container}>
//         <Text style={styles.title}>Let's Meet</Text>
//         <Text style={styles.subtitle}>Registration Form</Text>
//         <Text style={styles.description}>Fill out the form below to be one of the contestants!</Text>
//         <View style={styles.inputContainer}>
//           <TextInput
//             style={styles.input}
//             placeholder="Name"
//             placeholderTextColor="#aaa"
//             value={name}
//             onChangeText={setName}
//           />
//         </View>
//         <View style={styles.inputContainer}>
//           <TextInput
//             style={[styles.input, emailError ? styles.inputError : null]}
//             placeholder="Email id"
//             placeholderTextColor="#aaa"
//             value={email}
//             onChangeText={setEmail}
//             keyboardType="email-address"
//             autoCapitalize="none"
//           />
//           {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}
//         </View>
//         <Pressable style={styles.datePickerButton} onPress={() => setShowDatePicker(true)}>
//           <Text style={styles.datePickerText}>Date of Birth</Text>
//         </Pressable>
//         {showDatePicker && (
//           <DateTimePicker
//             value={dob}
//             mode="date"
//             display="default"
//             onChange={onChangeDate}
//           />
//         )}
//         {/* <View style={styles.inputContainer}>
//           <TextInput
//             style={styles.input}
//             placeholder="Rockstar Name"
//             placeholderTextColor="#aaa"
//             value={rockstarName}
//             onChangeText={setRockstarName}
//           />
//         </View> */}
//         <View style={styles.inputContainer}>
//           <TextInput
//             style={styles.input}
//             placeholder="Link (YouTube or similar)"
//             placeholderTextColor="#aaa"
//             value={link}
//             onChangeText={setLink}
//           />
//         </View>
//         <Pressable style={styles.button} onPress={handleRegister}>
//           <Text style={styles.buttonText}>Submit</Text>
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
//   container: {
//     flexGrow: 1,
//     justifyContent: 'center',
//     padding: 16,
//   },
//   title: {
//     fontSize: 32,
//     marginBottom: 16,
//     textAlign: 'center',
//     color: 'orange',
//     fontWeight: 'bold',
//   },
//   subtitle: {
//     fontSize: 24,
//     marginBottom: 8,
//     textAlign: 'center',
//     color: 'orange',
//   },
//   description: {
//     fontSize: 16,
//     marginBottom: 16,
//     textAlign: 'center',
//     color: 'white',
//   },
//   inputContainer: {
//     marginBottom: 12,
//   },
//   input: {
//     padding: 12,
//     borderColor: 'white',
//     borderWidth: 1,
//     borderRadius: 8,
//     color: 'white',
//     backgroundColor: 'rgba(255, 255, 255, 0.2)',
//   },
//   inputError: {
//     borderColor: 'red',
//   },
//   errorText: {
//     color: 'red',
//     marginTop: 4,
//   },
//   datePickerButton: {
//     padding: 12,
//     borderColor: 'white',
//     borderWidth: 1,
//     borderRadius: 8,
//     backgroundColor: 'rgba(255, 255, 255, 0.2)',
//     marginBottom: 12,
//   },
//   datePickerText: {
//     color: 'white',
//     textAlign: 'center',
//   },
//   button: {
//     padding: 16,
//     borderRadius: 8,
//     backgroundColor: '#ff6600',
//     alignItems: 'center',
//   },
//   buttonText: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: 'white',
//   },
// });

// export default RegistrationScreen;

import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, Pressable, ScrollView, ImageBackground, Alert } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import axios from 'axios';

const RegistrationScreen: React.FC = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [dob, setDob] = useState(new Date());
  const [mobileNumber, setMobileNumber] = useState('');
  const [username, setUsername] = useState('');
  const [rockstarName, setRockstarName] = useState('');
  const [link, setLink] = useState('');
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [emailError, setEmailError] = useState('');

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/users/6/');
        if (response.status === 200) {
          const userData = response.data;
          setFirstName(userData.first_name);
          setLastName(userData.last_name);
          setEmail(userData.email);
          setMobileNumber(userData.mobile_number);
          setUsername(userData.username);
        }
      } catch (error) {
        console.error('Failed to fetch user data:', error);
      }
    };

    fetchUserData();
  }, []);

  const handleRegister = async () => {
    if (!email.includes('@')) {
      setEmailError('Please enter a valid email id');
      return;
    }

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/users/', {
        first_name: firstName,
        last_name: lastName,
        email,
        dob: dob.toISOString().split('T')[0], // Format date to 'YYYY-MM-DD'
        mobile_number: mobileNumber,
        username,
        rockstar_name: rockstarName,
        link,
      });

      if (response.status === 201) {
        Alert.alert('Registration Successful', 'You have been registered successfully!');
        console.log('Registration response:', response.data);
      }
    } catch (error) {
      Alert.alert('Registration Failed', 'There was an error with your registration. Please try again.');
      console.error('Registration error:', error);
    }
  };

  const onChangeDate = (event: any, selectedDate: Date | undefined) => {
    setShowDatePicker(false);
    if (selectedDate) {
      setDob(selectedDate);
    }
  };

  return (
    <ImageBackground source={require('../assets/images/couple.jpg')} style={styles.backgroundImage}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Let's Meet</Text>
        <Text style={styles.subtitle}>Registration Form</Text>
        <Text style={styles.description}>Fill out the form below to be one of the contestants!</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="First Name"
            placeholderTextColor="#aaa"
            value={firstName}
            onChangeText={setFirstName}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Last Name"
            placeholderTextColor="#aaa"
            value={lastName}
            onChangeText={setLastName}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={[styles.input, emailError ? styles.inputError : null]}
            placeholder="Email id"
            placeholderTextColor="#aaa"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}
        </View>
        <Pressable style={styles.datePickerButton} onPress={() => setShowDatePicker(true)}>
          <Text style={styles.datePickerText}>Date of Birth</Text>
        </Pressable>
        {showDatePicker && (
          <DateTimePicker
            value={dob}
            mode="date"
            display="default"
            onChange={onChangeDate}
          />
        )}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Mobile Number"
            placeholderTextColor="#aaa"
            value={mobileNumber}
            onChangeText={setMobileNumber}
            keyboardType="phone-pad"
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Username"
            placeholderTextColor="#aaa"
            value={username}
            onChangeText={setUsername}
          />
        </View>
        {/* <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Rockstar Name"
            placeholderTextColor="#aaa"
            value={rockstarName}
            onChangeText={setRockstarName}
          />
        </View> */}
        {/* <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Link (YouTube or similar)"
            placeholderTextColor="#aaa"
            value={link}
            onChangeText={setLink}
          />
        </View> */}
        <Pressable style={styles.button} onPress={handleRegister}>
          <Text style={styles.buttonText}>Submit</Text>
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
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 32,
    marginBottom: 16,
    textAlign: 'center',
    color: 'orange',
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 24,
    marginBottom: 8,
    textAlign: 'center',
    color: 'orange',
  },
  description: {
    fontSize: 16,
    marginBottom: 16,
    textAlign: 'center',
    color: 'white',
  },
  inputContainer: {
    marginBottom: 12,
  },
  input: {
    padding: 12,
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 8,
    color: 'white',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
  inputError: {
    borderColor: 'red',
  },
  errorText: {
    color: 'red',
    marginTop: 4,
  },
  datePickerButton: {
    padding: 12,
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    marginBottom: 12,
  },
  datePickerText: {
    color: 'white',
    textAlign: 'center',
  },
  button: {
    padding: 16,
    borderRadius: 8,
    backgroundColor: '#ff6600',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default RegistrationScreen;
