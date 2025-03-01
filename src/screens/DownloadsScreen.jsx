import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from '../components/Header';

const DownloadsScreen = () => {
  return (
    <View style={styles.container}>
      <Header title="Downloads" />
      <View style={styles.content}>
        <Text style={styles.description}>
          You can download the test schedules, question papers with answer keys links given below:
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
  },
  content: {
    marginVertical:15,
    padding: 10,
  },
  description: {
    fontSize: 16,
    color: '#000',
    fontWeight:'bold'
  },
});

export default DownloadsScreen;
