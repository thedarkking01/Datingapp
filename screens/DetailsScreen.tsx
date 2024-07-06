// screens/DetailsScreen.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DetailsScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Details Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
  },
});

export default DetailsScreen;
