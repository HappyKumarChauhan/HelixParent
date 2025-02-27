import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const MessagesScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Messages</Text>
      <Text style={styles.infoText}>The messages you have sent will be shown here with details:</Text>

      <ScrollView>
        <View style={styles.tableHeader}>
          <Text style={styles.tableHeaderText}>Sr No.</Text>
          <Text style={styles.tableHeaderText}>Title</Text>
          <Text style={styles.tableHeaderText}>Date</Text>
          <Text style={styles.tableHeaderText}>Reply</Text>
        </View>

        {[1, 2, 3].map((item) => (
          <View style={styles.tableRow} key={item}>
            <Text style={styles.tableCell}>{item}.</Text>
            <Text style={styles.tableCell}>No data found</Text>
            <Text style={styles.tableCell}>No data found</Text>
            <Text style={styles.tableCell}>No data found</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f5f5f5',
      padding: 20,
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center',
      color: '#2E3192',
      marginBottom: 15,
    },
    infoText: {
      fontSize: 14,
      color: 'gray',
      textAlign: 'center',
      marginBottom: 15,
    },
    tableHeader: {
      flexDirection: 'row',
      backgroundColor: '#2E3192',
      padding: 10,
      borderRadius: 8,
    },
    tableHeaderText: {
      flex: 1,
      color: '#fff',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    tableRow: {
      flexDirection: 'row',
      padding: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#ddd',
    },
    tableCell: {
      flex: 1,
      textAlign: 'center',
      color: '#333',
    },
  });

export default MessagesScreen;
