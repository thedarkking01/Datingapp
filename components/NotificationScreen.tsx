// import React from 'react';
// import { View, Text, FlatList, StyleSheet, Image } from 'react-native';

// type Notification = {
//   id: string;
//   user: string;
//   type: string;
//   message: string;
//   avatar: string;
// };

// const notifications: Notification[] = [
//   {
//     id: '1',
//     user: 'Elon Musk',
//     type: 'post',
//     message: 'New post notifications for Elon Musk',
//     avatar: 'https://via.placeholder.com/40', // Replace with actual avatar URL
//   },
//   {
//     id: '2',
//     user: 'ZenobiaLamb',
//     type: 'follow',
//     message: 'ZenobiaLamb followed you',
//     avatar: 'https://via.placeholder.com/40', // Replace with actual avatar URL
//   },
//   {
//     id: '3',
//     user: 'india_stockmarket',
//     type: 'follow',
//     message: 'india_stockmarket followed you',
//     avatar: 'https://via.placeholder.com/40', // Replace with actual avatar URL
//   },
// ];

// const NotificationScreen: React.FC = () => {
//   const renderItem = ({ item }: { item: Notification }) => (
//     <View style={styles.notificationContainer}>
//       <Image source={{ uri: item.avatar }} style={styles.avatar} />
//       <View style={styles.notificationTextContainer}>
//         <Text style={styles.notificationUser}>{item.user}</Text>
//         <Text style={styles.notificationMessage}>{item.message}</Text>
//       </View>
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={notifications}
//         renderItem={renderItem}
//         keyExtractor={item => item.id}
//       />
      
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     paddingHorizontal: 10,
//   },
//   notificationContainer: {
//     flexDirection: 'row',
//     paddingVertical: 10,
//     borderBottomWidth: 1,
//     borderBottomColor: '#e0e0e0',
//   },
//   avatar: {
//     width: 40,
//     height: 40,
//     borderRadius: 20,
//   },
//   notificationTextContainer: {
//     marginLeft: 10,
//     justifyContent: 'center',
//   },
//   notificationUser: {
//     fontWeight: 'bold',
//   },
//   notificationMessage: {
//     color: '#555',
//   },
// });

// export default NotificationScreen;

import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity, Modal, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

type Notification = {
  id: string;
  user: string;
  type: string;
  message: string;
  avatar: string;
};

const notifications: Notification[] = [
    {
      id: '1',
      user: 'Bob Smith',
      type: 'post',
      message: 'New post notifications for Bob Smith',
      avatar: 'https://images.unsplash.com/photo-1554327414-e3321ac39633?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGRvZyUyMHBpY3xlbnwwfHwwfHx8MA%3D%3D', // Replace with actual avatar URL
    },
    {
      id: '2',
      user: 'Grace Hopper',
      type: 'follow',
      message: 'Grace Hopper block you',
      avatar: 'https://plus.unsplash.com/premium_photo-1664303072846-5dfab1ba8304?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZG9nJTIwcGljfGVufDB8fDB8fHww', // Replace with actual avatar URL
    },
    {
      id: '3',
      user: 'Isla Fisher',
      type: 'follow',
      message: 'Isla Fisher block you',
      avatar: 'https://plus.unsplash.com/premium_photo-1664303072846-5dfab1ba8304?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZG9nJTIwcGljfGVufDB8fDB8fHww', // Replace with actual avatar URL
    },
    {
      id: '4',
      user: 'Alice Johnson',
      type: 'like',
      message: 'Alice Johnson liked your photo',
      avatar: 'https://plus.unsplash.com/premium_photo-1664303072846-5dfab1ba8304?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZG9nJTIwcGljfGVufDB8fDB8fHww', // Replace with actual avatar URL
    },
    {
      id: '5',
      user: 'Bob Smith',
      type: 'message',
      message: 'Bob Smith sent you a message',
      avatar: 'https://plus.unsplash.com/premium_photo-1664303072846-5dfab1ba8304?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZG9nJTIwcGljfGVufDB8fDB8fHww', // Replace with actual avatar URL
    },
    {
      id: '6',
      user: 'Catherine Zeta',
      type: 'post',
      message: 'New post notifications for Catherine Zeta',
      avatar: 'https://plus.unsplash.com/premium_photo-1664303072846-5dfab1ba8304?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZG9nJTIwcGljfGVufDB8fDB8fHww', // Replace with actual avatar URL
    },
    {
      id: '7',
      user: 'David Brown',
      type: 'follow',
      message: 'David Brown followed you',
      avatar: 'https://plus.unsplash.com/premium_photo-1664303072846-5dfab1ba8304?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZG9nJTIwcGljfGVufDB8fDB8fHww', // Replace with actual avatar URL
    },
    {
      id: '8',
      user: 'Eva Green',
      type: 'like',
      message: 'Eva Green liked your photo',
      avatar: 'https://plus.unsplash.com/premium_photo-1664303072846-5dfab1ba8304?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZG9nJTIwcGljfGVufDB8fDB8fHww', // Replace with actual avatar URL
    },
    {
      id: '9',
      user: 'Frank White',
      type: 'message',
      message: 'Frank White sent you a message',
      avatar: 'https://plus.unsplash.com/premium_photo-1664303072846-5dfab1ba8304?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZG9nJTIwcGljfGVufDB8fDB8fHww', // Replace with actual avatar URL
    },
    {
      id: '10',
      user: 'Grace Hopper',
      type: 'post',
      message: 'New post notifications for Grace Hopper',
      avatar: 'https://plus.unsplash.com/premium_photo-1664303072846-5dfab1ba8304?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZG9nJTIwcGljfGVufDB8fDB8fHww', // Replace with actual avatar URL
    },
    {
      id: '11',
      user: 'Henry Cavill',
      type: 'follow',
      message: 'Henry Cavill followed you',
      avatar: 'https://plus.unsplash.com/premium_photo-1664303072846-5dfab1ba8304?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZG9nJTIwcGljfGVufDB8fDB8fHww', // Replace with actual avatar URL
    },
    {
      id: '12',
      user: 'Isla Fisher',
      type: 'like',
      message: 'Isla Fisher liked your photo',
      avatar: 'https://plus.unsplash.com/premium_photo-1664303072846-5dfab1ba8304?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZG9nJTIwcGljfGVufDB8fDB8fHww', // Replace with actual avatar URL
    },
    {
      id: '13',
      user: 'Jack Black',
      type: 'message',
      message: 'Jack Black sent you a message',
      avatar: 'https://plus.unsplash.com/premium_photo-1664303072846-5dfab1ba8304?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZG9nJTIwcGljfGVufDB8fDB8fHww', // Replace with actual avatar URL
    },
    {
      id: '14',
      user: 'Karen Gillan',
      type: 'post',
      message: 'New post notifications for Karen Gillan',
      avatar: 'https://plus.unsplash.com/premium_photo-1664303072846-5dfab1ba8304?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZG9nJTIwcGljfGVufDB8fDB8fHww', // Replace with actual avatar URL
    },
    {
      id: '15',
      user: 'Leo DiCaprio',
      type: 'follow',
      message: 'Leo DiCaprio followed you',
      avatar: 'https://plus.unsplash.com/premium_photo-1664303072846-5dfab1ba8304?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZG9nJTIwcGljfGVufDB8fDB8fHww', // Replace with actual avatar URL
    },
  ];
  

const NotificationScreen: React.FC = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const renderItem = ({ item }: { item: Notification }) => (
    <View style={styles.notificationContainer}>
      <Image source={{ uri: item.avatar }} style={styles.avatar} />
      <View style={styles.notificationTextContainer}>
        <Text style={styles.notificationUser}>{item.user}</Text>
        <Text style={styles.notificationMessage}>{item.message}</Text>
      </View>
    </View>
  );

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={notifications}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />

      <TouchableOpacity style={styles.plusButton} onPress={toggleModal}>
        <Icon name="add" size={30} color="#fff" />
      </TouchableOpacity>

      <Modal
        transparent={true}
        animationType="slide"
        visible={modalVisible}
        onRequestClose={toggleModal}
      >
        <TouchableWithoutFeedback onPress={toggleModal}>
          <View style={styles.modalOverlay} />
        </TouchableWithoutFeedback>
        <View style={styles.modalContent}>
          <TouchableOpacity style={styles.modalButton}>
            <Icon name="videocam" size={24} color="#000" />
            <Text style={styles.modalButtonText}>Go Live</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.modalButton}>
            <Icon name="forum" size={24} color="#000" />
            <Text style={styles.modalButtonText}>Spaces</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.modalButton}>
            <Icon name="photo" size={24} color="#000" />
            <Text style={styles.modalButtonText}>Photos</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.modalButton}>
            <Icon name="edit" size={24} color="#000" />
            <Text style={styles.modalButtonText}>Post</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
  },
  notificationContainer: {
    flexDirection: 'row',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  notificationTextContainer: {
    marginLeft: 10,
    justifyContent: 'center',
  },
  notificationUser: {
    fontWeight: 'bold',
  },
  notificationMessage: {
    color: '#555',
  },
  plusButton: {
    position: 'absolute',
    bottom: 20,
    right: 30,
    backgroundColor: '#ff5a5f',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    position: 'absolute',
    bottom: 100,
    right: 30,
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
  },
  modalButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  modalButtonText: {
    marginLeft: 10,
    fontSize: 16,
  },
});

export default NotificationScreen;
