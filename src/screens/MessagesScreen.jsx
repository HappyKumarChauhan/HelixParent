import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Header from '../components/Header';

// Messages Data (Empty to show "No data found")
const messagesData = [
  { srNo: 1, title: 'No data found', date: 'No data found', reply: 'No data found' },
  { srNo: 2, title: 'No data found', date: 'No data found', reply: 'No data found' },
  { srNo: 3, title: 'No data found', date: 'No data found', reply: 'No data found' },
  { srNo: 4, title: 'No data found', date: 'No data found', reply: 'No data found' },
  { srNo: 5, title: 'No data found', date: 'No data found', reply: 'No data found' },
];

const MessagesScreen = () => {
  return (
    <View style={styles.container}>
      <Header title="Messages" />

      <View style={styles.content}>
        <Text style={styles.infoText}>The messages you have sent will be shown here with details:</Text>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View>
            {/* Table Header */}
            <View style={styles.tableHeader}>
              <Text style={styles.headerCell}>Sr No.</Text>
              <Text style={styles.headerCell}>Title</Text>
              <Text style={styles.headerCell}>Date</Text>
              <Text style={styles.headerCell}>Reply</Text>
            </View>

            {/* Section Container wrapping only table rows */}
            <View style={styles.sectionContainer}>
              {messagesData.length > 0 ? (
                messagesData.map((item, index) => (
                  <View key={index} style={styles.tableRow}>
                    <Text style={styles.rowCell}>{item.srNo}.</Text>
                    <Text style={styles.rowCell}>{item.title}</Text>
                    <Text style={styles.rowCell}>{item.date}</Text>
                    <Text style={styles.rowCell}>{item.reply}</Text>
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
  },
  infoText: {
    fontSize: 16,
    color: '#000',
    textAlign: 'left',
    marginVertical: 25,
    fontWeight:'bold'
  },
  tableHeader: {
    flexDirection: 'row',
    backgroundColor: '#FFD601',
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
    width: 150,
    textAlign: 'center',
    color: '#000',
  },
  rowCell: {
    fontSize: 14,
    width: 150,
    textAlign: 'center',
    color: '#333',
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

export default MessagesScreen;
