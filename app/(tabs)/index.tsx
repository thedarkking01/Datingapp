// import { Image, StyleSheet, Platform } from 'react-native';

// import { HelloWave } from '@/components/HelloWave';
// import ParallaxScrollView from '@/components/ParallaxScrollView';
// import { ThemedText } from '@/components/ThemedText';
// import { ThemedView } from '@/components/ThemedView';

// export default function HomeScreen() {
//   return (
//     <ParallaxScrollView
//       headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
//       headerImage={
//         <Image
//           source={require('@/assets/images/partial-react-logo.png')}
//           style={styles.reactLogo}
//         />
//       }>
//       <ThemedView style={styles.titleContainer}>
//         <ThemedText type="title">Hello Sourabh</ThemedText>
//         <HelloWave />
//       </ThemedView>
//       <ThemedView style={styles.stepContainer}>
//         <ThemedText type="subtitle">Step 1: Try it</ThemedText>
//         <ThemedText>
//           Edit <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> to see changes.
//           Press{' '}
//           <ThemedText type="defaultSemiBold">
//             {Platform.select({ ios: 'cmd + d', android: 'cmd + m' })}
//           </ThemedText>{' '}
//           to open developer tools.
//         </ThemedText>
//       </ThemedView>
//       <ThemedView style={styles.stepContainer}>
//         <ThemedText type="subtitle">Step 2: Explore</ThemedText>
//         <ThemedText>
//           Tap the Explore tab to learn more about what's included in this starter app.
//         </ThemedText>
//       </ThemedView>
//       <ThemedView style={styles.stepContainer}>
//         <ThemedText type="subtitle">Step 3: Get a fresh start</ThemedText>
//         <ThemedText>
//           When you're ready, run{' '}
//           <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText> to get a fresh{' '}
//           <ThemedText type="defaultSemiBold">app</ThemedText> directory. This will move the current{' '}
//           <ThemedText type="defaultSemiBold">app</ThemedText> to{' '}
//           <ThemedText type="defaultSemiBold">app-example</ThemedText>.
//         </ThemedText>
//       </ThemedView>
//     </ParallaxScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   titleContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: 8,
//   },
//   stepContainer: {
//     gap: 8,
//     marginBottom: 8,
//   },
//   reactLogo: {
//     height: 178,
//     width: 290,
//     bottom: 0,
//     left: 0,
//     position: 'absolute',
//   },
// });

import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import RegistrationScreen from '@/components/RegistrationScreen';
import LoginScreen from '@/components/LoginScreen';
import UserDetail from '@/components/userdetail';
import ProfilePage from '@/components/ProfilePage';
import NotificationScreen from '@/components/NotificationScreen';


const Stack = createStackNavigator();

const App: React.FC = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Notifications" component={NotificationScreen} />
        {/* <Stack.Screen name="Login" component={LoginScreen} /> */}
        <Stack.Screen name="Profile" component={ProfilePage} />
        <Stack.Screen name="Register" component={RegistrationScreen} />
        <Stack.Screen name="UserDetail" component={UserDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

// import React, { useState } from 'react';
// import { View } from 'react-native';
// import ChatList from '@/components/ChatList';
// import ChatScreen from '@/components/ChartScreen';


// type Chat = {
//   id: string;
//   name: string;
//   lastMessage: string;
//   image: string;
// };

// const App: React.FC = () => {
//   const [currentChat, setCurrentChat] = useState<Chat | null>(null);

//   const chats: Chat[] = [
//     {
//       id: '1',
//       name: 'Shane Martinez',
//       lastMessage: 'Hey, how are you?',
//       image: 'https://via.placeholder.com/50',
//     },
//     {
//       id: '2',
//       name: 'Katie Keller',
//       lastMessage: 'See you tomorrow!',
//       image: 'https://via.placeholder.com/50',
//     },
//     {
//       id: '3',
//       name: 'Stephen Ward',
//       lastMessage: 'Meeting at 5 PM',
//       image: 'https://via.placeholder.com/50',
//     },
//     {
//       id: '4',
//       name: 'Marvin Pratt',
//       lastMessage: 'Got it, thanks!',
//       image: 'https://via.placeholder.com/50',
//     },
//   ];

//   const handleChatPress = (chat: Chat) => {
//     setCurrentChat(chat);
//   };

//   const handleBackPress = () => {
//     setCurrentChat(null);
//   };

//   return (
//     <View style={{ flex: 1 }}>
//       {currentChat ? (
//         <ChatScreen user={currentChat} onBackPress={handleBackPress} />
//       ) : (
//         <ChatList chats={chats} onChatPress={handleChatPress} />
//       )}
//     </View>
//   );
// };

// export default App;