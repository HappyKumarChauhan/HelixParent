import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const FeeDetailsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Fee Details</Text>

      <ScrollView>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Total Fees</Text>
          <Text style={styles.amount}>₹ 0</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Total Paid</Text>
          <Text style={styles.amount}>₹ 0</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Total Pending</Text>
          <Text style={styles.amount}>₹ 0</Text>
        </View>

        <Text style={styles.sectionTitle}>Installments</Text>

        <View style={styles.tableHeader}>
          <Text style={styles.tableHeaderText}>Installment No.</Text>
          <Text style={styles.tableHeaderText}>Due Date</Text>
          <Text style={styles.tableHeaderText}>Amount</Text>
        </View>

        {[1, 2, 3, 4, 5].map((item) => (
          <View style={styles.tableRow} key={item}>
            <Text style={styles.tableCell}>{item}</Text>
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
    card: {
      backgroundColor: '#fff',
      padding: 15,
      marginBottom: 10,
      borderRadius: 8,
      elevation: 3,
    },
    cardTitle: {
      fontSize: 16,
      color: '#555',
    },
    amount: {
      fontSize: 18,
      fontWeight: 'bold',
      marginTop: 5,
    },
    sectionTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      marginTop: 15,
      marginBottom: 5,
      color: '#2E3192',
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

export default FeeDetailsScreen;
