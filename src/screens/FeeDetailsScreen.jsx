import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Header from '../components/Header';

// Fee Data (Empty to show "No data found")
const feeData = [
  { installmentNo: 1, dueDate: 'No data found', amount: 'No data found', balance: 'No data found', totalBalance: 'No data found' },
  { installmentNo: 2, dueDate: 'No data found', amount: 'No data found', balance: 'No data found', totalBalance: 'No data found' },
  { installmentNo: 3, dueDate: 'No data found', amount: 'No data found', balance: 'No data found', totalBalance: 'No data found' },
  { installmentNo: 4, dueDate: 'No data found', amount: 'No data found', balance: 'No data found', totalBalance: 'No data found' },
  { installmentNo: 5, dueDate: 'No data found', amount: 'No data found', balance: 'No data found', totalBalance: 'No data found' },
];

const FeeDetailsScreen = () => {
  return (
    <View style={styles.container}>
      <Header title="Fee Details" />

      <View style={styles.content}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View>
            {/* Table Header */}
            <View style={styles.tableHeader}>
              <Text style={styles.headerCell}>Fee Installment No.</Text>
              <Text style={styles.headerCell}>Installment Due Date</Text>
              <Text style={styles.headerCell}>Installment Amount</Text>
              <Text style={styles.headerCell}>Balance Installment</Text>
              <Text style={styles.headerCell}>Total Balance</Text>
            </View>

            {/* Section Container wrapping only table rows */}
            <View style={styles.sectionContainer}>
              {feeData.length > 0 ? (
                feeData.map((item, index) => (
                  <View key={index} style={styles.tableRow}>
                    <Text style={styles.rowCell}>{item.installmentNo}.</Text>
                    <Text style={styles.rowCell}>{item.dueDate}</Text>
                    <Text style={styles.rowCell}>{item.amount}</Text>
                    <Text style={styles.rowCell}>{item.balance}</Text>
                    <Text style={styles.rowCell}>{item.totalBalance}</Text>
                  </View>
                ))
              ) : (
                <View style={styles.noDataContainer}>
                  <Text style={styles.noDataText}>No Data Found</Text>
                </View>
              )}
            </View>
          </View>
        </ScrollView>
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
    flex: 1,
    padding: 15,
    marginTop: 50,
  },
  tableHeader: {
    flexDirection: 'row',
    backgroundColor: '#FFD700',
    paddingVertical: 25,
    paddingHorizontal: 10,
  },
  sectionContainer: {
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    paddingBottom: 5,
  },
  tableRow: {
    flexDirection: 'row',
    backgroundColor: '#FFF8DC',
    paddingVertical: 25,
    paddingHorizontal: 10,
  },
  headerCell: {
    fontWeight: 'bold',
    fontSize: 14,
    width: 160,
    textAlign: 'center',
  },
  rowCell: {
    fontSize: 14,
    width: 160,
    textAlign: 'center',
  },
  noDataContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 10,
  },
  noDataText: {
    color: 'red',
    fontSize: 14,
  },
});

export default FeeDetailsScreen;
