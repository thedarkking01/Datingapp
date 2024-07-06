import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';

type RootStackParamList = {
  UserDetail: {
    name: string;
    image: string;
    dob: string;
    interests: string[];
    hobbies: string[];
    education: string;
    family: string;
    netWorth: string;
  };
};

type UserDetailRouteProp = RouteProp<RootStackParamList, 'UserDetail'>;

const UserDetail: React.FC = () => {
  const route = useRoute<UserDetailRouteProp>();
  const params = route.params || {
    name: 'Pikachu',
    image: 'data:image/jpeg;base64,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',
    dob: '01 January 2003',
    interests: ['Traveling', 'Reading'],
    hobbies: ['Hiking', 'Photography','Fight'],
    education: 'Bachelor\'s Degree in Computer Science',
    family: 'Single',
    netWorth:"$1bn+",
  };

  const { name, image, dob, interests, hobbies, education, family,netWorth } = params;

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.detailsContainer}>
        <Text style={styles.detailItem}>Date of Birth: {dob}</Text>
        <Text style={styles.detailItem}>Interests: {interests.join(', ')}</Text>
        <Text style={styles.detailItem}>Hobbies: {hobbies.join(', ')}</Text>
        <Text style={styles.detailItem}>Education: {education}</Text>
        <Text style={styles.detailItem}>Family: {family}</Text>
        <Text style={styles.detailItem}>Net Worth: {netWorth}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 16,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 16,
  },
  detailsContainer: {
    width: '100%',
    paddingHorizontal: 16,
  },
  detailItem: {
    fontSize: 16,
    marginVertical: 8,
  },
  errorText: {
    fontSize: 18,
    color: 'red',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default UserDetail;
