import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

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
      <TouchableOpacity onPress={onBackPress} style={styles.backButtonContainer}>
        <Text style={styles.backButton}>Back</Text>
      </TouchableOpacity>
      <Text style={styles.header}>{user.name}</Text>
      <FlatList data={messages} renderItem={renderMessage} keyExtractor={item => item.id} style={styles.messageList} />
      <View style={styles.inputContainer}>
        <TextInput value={inputText} onChangeText={setInputText} placeholder="Type a message" style={styles.input} />
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
    backgroundColor: '#f5f5f5',
  },
  backButtonContainer: {
    padding: 10,
    color: '#000'
  },
  backButton: {
    color: '#007bff',
    fontSize: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    padding: 20,
    backgroundColor: '#fff',
    textAlign: 'center',
  },
  messageList: {
    flex: 1,
    paddingHorizontal: 10,
  },
  messageContainer: {
    padding: 10,
    marginVertical: 5,
    borderRadius: 10,
  },
  myMessage: {
    backgroundColor: '#d1e7ff',
    alignSelf: 'flex-end',
  },
  userMessage: {
    backgroundColor: '#fff',
    alignSelf: 'flex-start',
  },
  messageText: {
    fontSize: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 25,
    paddingHorizontal: 15,
    marginRight: 10,
  },
  sendButton: {
    backgroundColor: '#007bff',
    borderRadius: 25,
    padding: 10,
    justifyContent: 'center',
  },
  sendButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default ChatScreen;