// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   Image,
//   StyleSheet,
//   TouchableOpacity,
//   Modal,
//   TouchableWithoutFeedback,
//   ScrollView,
// } from 'react-native';
// import ImagePicker, { ImagePickerResponse } from 'react-native-image-picker';
// import Icon from 'react-native-vector-icons/MaterialIcons';

// const ProfilePage: React.FC = () => {
//   const [profileImage, setProfileImage] = useState<ImagePickerResponse | null>(null);
//   const [modalVisible, setModalVisible] = useState(false);

//   const handleChoosePhoto = () => {
//     const options = {
//       noData: true,
//     };
//     ImagePicker.launchImageLibrary(options, (response: ImagePickerResponse) => {
//       if (response.uri) {
//         setProfileImage(response);
//       }
//     });
//   };

//   const toggleModal = () => {
//     setModalVisible(!modalVisible);
//   };

//   return (
//     <View style={styles.container}>
//       <ScrollView>
//         <View style={styles.profileHeader}>
//           {profileImage ? (
//             <Image source={{ uri: profileImage.uri }} style={styles.profileImage} />
//           ) : (
//             <Image
//               source={{ uri: 'https://plus.unsplash.com/premium_photo-1676479610722-1f855a4f0cac?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZG9nJTIwcGljdHVyZXxlbnwwfDB8MHx8fDA%3D' }}
//               style={styles.profileImage}
//             />
//           )}
//           <Text style={styles.name}>Chris Evans, 18</Text>
//           <Text style={styles.jobTitle}>Software Engineer</Text>
//           <Text style={styles.school}>Don Bosco</Text>
//         </View>

//         <View style={styles.section}>
//           <Text style={styles.sectionTitle}>Location</Text>
//           <Text style={styles.sectionContent}>New York, USA</Text>
//         </View>

//         <View style={styles.section}>
//           <Text style={styles.sectionTitle}>Bio</Text>
//           <Text style={styles.sectionContent}>
//             Hi, I'm Chris! I love coding, hiking, and trying out new restaurants. Looking to meet new
//             people and see where things go!
//           </Text>
//         </View>

//         <View style={styles.section}>
//           <Text style={styles.sectionTitle}>Interests</Text>
//           <Text style={styles.sectionContent}>Coding, Hiking, Foodie, Traveling, Movies</Text>
//         </View>

//         <View style={styles.section}>
//           <Text style={styles.sectionTitle}>Education</Text>
//           <Text style={styles.sectionContent}>Bachelor of Science in Computer Science</Text>
//         </View>

//         <TouchableOpacity style={styles.button} onPress={handleChoosePhoto}>
//           <Text style={styles.buttonText}>Upload Image</Text>
//         </TouchableOpacity>
//         {/* <TouchableOpacity style={styles.button}>
//           <Text style={styles.buttonText}>My LoveLock Plus</Text>
//         </TouchableOpacity> */}
//       </ScrollView>

//       <TouchableOpacity style={styles.plusButton} onPress={toggleModal}>
//         <Icon name="add" size={30} color="#fff" />
//       </TouchableOpacity>

//       <Modal
//         transparent={true}
//         animationType="slide"
//         visible={modalVisible}
//         onRequestClose={toggleModal}
//       >
//         <TouchableWithoutFeedback onPress={toggleModal}>
//           <View style={styles.modalOverlay} />
//         </TouchableWithoutFeedback>
//         <View style={styles.modalContent}>
//           <TouchableOpacity style={styles.modalButton}>
//             <Icon name="videocam" size={24} color="#000" />
//             <Text style={styles.modalButtonText}>Go Live</Text>
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.modalButton}>
//             <Icon name="forum" size={24} color="#000" />
//             <Text style={styles.modalButtonText}>Spaces</Text>
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.modalButton} onPress={handleChoosePhoto}>
//             <Icon name="photo" size={24} color="#000" />
//             <Text style={styles.modalButtonText}>Photos</Text>
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.modalButton}>
//             <Icon name="edit" size={24} color="#000" />
//             <Text style={styles.modalButtonText}>Post</Text>
//           </TouchableOpacity>
//         </View>
//       </Modal>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   profileHeader: {
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   profileImage: {
//     width: 100,
//     height: 100,
//     borderRadius: 50, // This makes the image round
//     marginBottom: 10,
//   },
//   noProfileImageText: {
//     fontSize: 16,
//     color: '#888',
//   },
//   name: {
//     fontSize: 24,
//     fontWeight: 'bold',
//   },
//   jobTitle: {
//     fontSize: 18,
//     color: '#888',
//   },
//   school: {
//     fontSize: 16,
//     color: '#aaa',
//   },
//   section: {
//     marginBottom: 20,
//     paddingHorizontal: 20,
//   },
//   sectionTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 5,
//   },
//   sectionContent: {
//     fontSize: 16,
//     color: '#555',
//   },
//   button: {
//     backgroundColor: '#ff5a5f',
//     padding: 15,
//     borderRadius: 5,
//     alignItems: 'center',
//     marginBottom: 10,
//     marginHorizontal: 20,
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 16,
//   },
//   plusButton: {
//     position: 'absolute',
//     bottom: 20, // Ensures the button is at the bottom
//     right: 30,
//     backgroundColor: '#ff5a5f',
//     width: 60,
//     height: 60,
//     borderRadius: 30,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   modalOverlay: {
//     flex: 1,
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//   },
//   modalContent: {
//     position: 'absolute',
//     bottom: 100,
//     right: 30,
//     backgroundColor: '#fff',
//     padding: 20,
//     borderRadius: 10,
//   },
//   modalButton: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 10,
//   },
//   modalButtonText: {
//     marginLeft: 10,
//     fontSize: 16,
//   },
// });

// export default ProfilePage;


import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Modal,
  TouchableWithoutFeedback,
  ScrollView,
} from 'react-native';
import ImagePicker, { ImagePickerResponse } from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/MaterialIcons';

const ProfilePage: React.FC = () => {
  const [profileImage, setProfileImage] = useState<ImagePickerResponse | null>(null);
  const [modalVisible, setModalVisible] = useState(false);

  const handleChoosePhoto = () => {
    const options = {
      noData: true,
    };
    ImagePicker.launchImageLibrary(options, (response: ImagePickerResponse) => {
      if (response.uri) {
        setProfileImage(response);
      }
    });
  };

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.profileHeader}>
          {profileImage ? (
            <Image source={{ uri: profileImage.uri }} style={styles.profileImage} />
          ) : (
            <Image
              source={{ uri: 'https://plus.unsplash.com/premium_photo-1676479610722-1f855a4f0cac?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZG9nJTIwcGljdHVyZXxlbnwwfDB8MHx8fDA%3D' }}
              style={styles.profileImage}
            />
          )}
          <View style={styles.profileInfo}>
            <Text style={styles.name}>Chris Evans, 18</Text>
            <Text style={styles.jobTitle}>Software Engineer</Text>
            <Text style={styles.location}>New York, USA</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Bio</Text>
          <Text style={styles.sectionContent}>
            Hi, I'm Chris! I love coding, hiking, and trying out new restaurants. Looking to meet new
            people and see where things go!
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Interests</Text>
          <Text style={styles.sectionContent}>Coding, Hiking, Foodie, Traveling, Movies</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Education</Text>
          <Text style={styles.sectionContent}>Bachelor of Science in Computer Science</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Likes</Text>
          <Text style={styles.sectionContent}>123 Likes</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Comments</Text>
          <Text style={styles.sectionContent}>45 Comments</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Replies</Text>
          <Text style={styles.sectionContent}>67 Replies</Text>
        </View>

        <TouchableOpacity style={styles.button} onPress={handleChoosePhoto}>
          <Text style={styles.buttonText}>Upload Image</Text>
        </TouchableOpacity>

        <View style={styles.postsSection}>
          <Text style={styles.postsTitle}>Posts</Text>
          <View style={styles.post}>
            <Text style={styles.postText}>
              Getting in shape isn’t by accident. Becoming wealthy isn’t by accident. Finding your purpose isn’t by accident. A successful life is lived with intention.
            </Text>
          </View>
          <View style={styles.post}>
            <Text style={styles.postText}>
              10 Rules That Will Make You Dangerous: 1. Talking slower is a sign of confidence in what you are saying.
            </Text>
          </View>
        </View>
      </ScrollView>

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
          <TouchableOpacity style={styles.modalButton} onPress={handleChoosePhoto}>
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
  },
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  profileInfo: {
    marginLeft: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  jobTitle: {
    fontSize: 18,
    color: '#888',
  },
  location: {
    fontSize: 16,
    color: '#aaa',
  },
  section: {
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  sectionContent: {
    fontSize: 16,
    color: '#555',
  },
  button: {
    backgroundColor: '#ff5a5f',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10,
    marginHorizontal: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  postsSection: {
    paddingHorizontal: 20,
  },
  postsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  post: {
    marginBottom: 10,
    padding: 15,
    backgroundColor: '#f9f9f9',
    borderRadius: 5,
  },
  postText: {
    fontSize: 16,
    color: '#333',
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

export default ProfilePage;
