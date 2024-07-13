// import React, { useState } from 'react';
// import { View, Text, TextInput, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

// type Message = {
//   id: string;
//   text: string;
//   sender: 'user' | 'me';
// };

// type Chat = {
//   id: string;
//   name: string;
//   lastMessage: string;
//   image: string;
// };

// type ChatScreenProps = {
//   user: Chat;
//   onBackPress: () => void;
// };

// const ChatScreen: React.FC<ChatScreenProps> = ({ user, onBackPress }) => {
//   const [messages, setMessages] = useState<Message[]>([
//     { id: '1', text: 'Hello!', sender: 'user' },
//     { id: '2', text: 'Hi there!', sender: 'me' },
//   ]);
//   const [inputText, setInputText] = useState<string>('');

//   const sendMessage = () => {
//     if (inputText.trim()) {
//       setMessages([...messages, { id: String(messages.length + 1), text: inputText, sender: 'me' }]);
//       setInputText('');
//     }
//   };

//   const renderMessage = ({ item }: { item: Message }) => (
//     <View style={[styles.messageContainer, item.sender === 'me' ? styles.myMessage : styles.userMessage]}>
//       <Text style={styles.messageText}>{item.text}</Text>
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//       <TouchableOpacity onPress={onBackPress} style={styles.backButtonContainer}>
//         <Text style={styles.backButton}>Back</Text>
//       </TouchableOpacity>
//       <Text style={styles.header}>{user.name}</Text>
//       <FlatList data={messages} renderItem={renderMessage} keyExtractor={item => item.id} style={styles.messageList} />
//       <View style={styles.inputContainer}>
//         <TextInput value={inputText} onChangeText={setInputText} placeholder="Type a message" style={styles.input} />
//         <TouchableOpacity onPress={sendMessage} style={styles.sendButton}>
//           <Text style={styles.sendButtonText}>Send</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f5f5f5',
//   },
//   backButtonContainer: {
//     padding: 10,
//     color: '#000'
//   },
//   backButton: {
//     color: '#007bff',
//     fontSize: 16,
//   },
//   header: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     padding: 20,
//     backgroundColor: '#fff',
//     textAlign: 'center',
//   },
//   messageList: {
//     flex: 1,
//     paddingHorizontal: 10,
//   },
//   messageContainer: {
//     padding: 10,
//     marginVertical: 5,
//     borderRadius: 10,
//   },
//   myMessage: {
//     backgroundColor: '#d1e7ff',
//     alignSelf: 'flex-end',
//   },
//   userMessage: {
//     backgroundColor: '#fff',
//     alignSelf: 'flex-start',
//   },
//   messageText: {
//     fontSize: 16,
//   },
//   inputContainer: {
//     flexDirection: 'row',
//     padding: 10,
//     backgroundColor: '#fff',
//     borderTopWidth: 1,
//     borderTopColor: '#ddd',
//   },
//   input: {
//     flex: 1,
//     borderWidth: 1,
//     borderColor: '#ddd',
//     borderRadius: 25,
//     paddingHorizontal: 15,
//     marginRight: 10,
//   },
//   sendButton: {
//     backgroundColor: '#007bff',
//     borderRadius: 25,
//     padding: 10,
//     justifyContent: 'center',
//   },
//   sendButtonText: {
//     color: '#fff',
//     fontSize: 16,
//   },
// });

// export default ChatScreen;

import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome, FontAwesome5, MaterialIcons } from '@expo/vector-icons';

type Message = {
  id: string;
  text: string;
  sender: 'user' | 'me';
};

type Chat = {
  id: string;
  name: string;
  lastMessage: string;
  image: string;
};

type ChatScreenProps = {
  user: Chat;
  onBackPress: () => void;
};

const ChatScreen: React.FC<ChatScreenProps> = ({ user, onBackPress }) => {
  const [messages, setMessages] = useState<Message[]>([
    { id: '1', text: 'Hello!', sender: 'user' },
    { id: '2', text: 'Hi there!', sender: 'me' },
  ]);
  const [inputText, setInputText] = useState<string>('');

  const sendMessage = () => {
    if (inputText.trim()) {
      setMessages([...messages, { id: String(messages.length + 1), text: inputText, sender: 'me' }]);
      setInputText('');
    }
  };

  const renderMessage = ({ item }: { item: Message }) => (
    <View style={[styles.messageContainer, item.sender === 'me' ? styles.myMessage : styles.userMessage]}>
      <Text style={styles.messageText}>{item.text}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={onBackPress} style={styles.backButtonContainer}>
          <Text style={styles.backButton}>Back</Text>
        </TouchableOpacity>
        <Text style={styles.header}>{user.name}</Text>
        <View style={styles.iconsContainer}>
          <TouchableOpacity style={styles.iconButton}>
            <FontAwesome name="phone" size={24} color="#BB86FC" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <FontAwesome5 name="video" size={24} color="#BB86FC" />
          </TouchableOpacity>
        </View>
      </View>
      <FlatList data={messages} renderItem={renderMessage} keyExtractor={item => item.id} style={styles.messageList} />
      <View style={styles.inputContainer}>
        <TouchableOpacity style={styles.emojiButton}>
          <MaterialIcons name="emoji-emotions" size={24} color="#BB86FC" />
        </TouchableOpacity>
        <TextInput value={inputText} onChangeText={setInputText} placeholder="Type a message" placeholderTextColor="#888" style={styles.input} />
        <TouchableOpacity onPress={sendMessage} style={styles.sendButton}>
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#1F1F1F',
  },
  backButtonContainer: {
    padding: 10,
  },
  backButton: {
    color: '#BB86FC',
    fontSize: 16,
    fontWeight: 'bold',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#BB86FC',
  },
  iconsContainer: {
    flexDirection: 'row',
  },
  iconButton: {
    marginLeft: 10,
  },
  messageList: {
    flex: 1,
    paddingHorizontal: 10,
  },
  messageContainer: {
    padding: 10,
    marginVertical: 5,
    borderRadius: 10,
    maxWidth: '70%',
    alignSelf: 'flex-start',
    elevation: 2,
  },
  myMessage: {
    backgroundColor: '#BB86FC',
    alignSelf: 'flex-end',
  },
  userMessage: {
    backgroundColor: '#1F1F1F',
  },
  messageText: {
    fontSize: 16,
    color: '#FFF',
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#1F1F1F',
    borderTopWidth: 1,
    borderTopColor: '#333',
    alignItems: 'center',
  },
  emojiButton: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#333',
    borderRadius: 25,
    paddingHorizontal: 15,
    backgroundColor: '#333',
    color: '#FFF',
  },
  sendButton: {
    backgroundColor: '#BB86FC',
    borderRadius: 25,
    padding: 10,
    justifyContent: 'center',
    elevation: 2,
  },
  sendButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ChatScreen;