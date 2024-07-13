// import React, { useState } from 'react';
// import { View, Text, TextInput, StyleSheet, Pressable, GestureResponderEvent, ImageBackground } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';

// const LoginScreen: React.FC = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = () => {
//     console.log('Login:', { email, password });
//   };

//   const onPress = (event: GestureResponderEvent): void => {
//     handleLogin();
//   };

//   return (
//     <ImageBackground source={require('../assets/images/couple2.jpg')} style={styles.backgroundImage}>
//       <View style={styles.overlay} />
//       <View style={styles.container}>
//         <Text style={styles.title}>Login</Text>
//         <View style={styles.inputContainer}>
//           <Icon name="envelope" size={20} color="white" style={styles.icon} />
//           <TextInput
//             style={styles.input}
//             placeholder="Email"
//             placeholderTextColor="white"
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
//             placeholderTextColor="white"
//             value={password}
//             onChangeText={setPassword}
//             secureTextEntry
//           />
//         </View>
//         <Pressable style={styles.button} onPress={onPress}>
//           <Text style={styles.text}>LOGIN</Text>
//         </Pressable>
//       </View>
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
//     flex: 1,
//     justifyContent: 'center',
//     padding: 16,
//     backgroundColor: 'rgba(255, 255, 255, 0.2)', // semi-transparent background to make text readable
//   },
//   title: {
//     fontSize: 32,
//     marginBottom: 16,
//     textAlign: 'center',
//     // color: '#0056b3',
//     color:'white',
//     fontWeight: 'bold',
//   },
//   inputContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginVertical: 8,
//     borderBottomWidth: 1,
//     borderBottomColor: 'white', // white bottom border color
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
//   text: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: 'white',
//   },
// });

// export default LoginScreen;


import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Pressable, GestureResponderEvent, ImageBackground, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen: React.FC = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/login/', {
        username,
        email,
        password,
      });

      if (response.status === 200) {
        const userDetails = response.data;
        const accessToken = userDetails.access; // Assuming the access token is in the 'access' field
        //await AsyncStorage.setItem('accessToken', accessToken);
        localStorage.setItem('accessToken', accessToken);
        Alert.alert('Login Successful', `Welcome ${userDetails.username}!`);
        console.log('User details:', userDetails);
      }
    } catch (error) {
      Alert.alert('Login Failed', 'Please check your credentials and try again.');
      console.error('Login error:', error);
    }
  };

  const onPress = (event: GestureResponderEvent): void => {
    handleLogin();
  };

  return (
    <ImageBackground source={require('../assets/images/couple2.jpg')} style={styles.backgroundImage}>
      <View style={styles.overlay} />
      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
        <View style={styles.inputContainer}>
          <Icon name="user" size={20} color="white" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Username"
            placeholderTextColor="white"
            value={username}
            onChangeText={setUsername}
          />
        </View>
        <View style={styles.inputContainer}>
          <Icon name="envelope" size={20} color="white" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="white"
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
            placeholderTextColor="white"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
        </View>
        <Pressable style={styles.button} onPress={onPress}>
          <Text style={styles.text}>LOGIN</Text>
        </Pressable>
      </View>
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
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.2)', // semi-transparent background to make text readable
  },
  title: {
    fontSize: 32,
    marginBottom: 16,
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: 'white', // white bottom border color
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
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default LoginScreen;

