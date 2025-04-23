import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  LayoutAnimation,
  Platform,
  UIManager,
} from 'react-native';
import Header from '../components/Header';
import Icon from 'react-native-vector-icons/MaterialIcons';

if (Platform.OS === 'android') {
  UIManager.setLayoutAnimationEnabledExperimental &&
    UIManager.setLayoutAnimationEnabledExperimental(true);
}

const feeData = [
  {
    installmentNo: 1,
    dueDate: '2025-04-01',
    amount: '₹5,000',
    balance: '₹2,000',
    totalBalance: '₹15,000',
  },
  {
    installmentNo: 2,
    dueDate: '2025-05-01',
    amount: '₹5,000',
    balance: '₹5,000',
    totalBalance: '₹10,000',
  },
  {
    installmentNo: 3,
    dueDate: '2025-06-01',
    amount: '₹5,000',
    balance: '₹0',
    totalBalance: '₹5,000',
  },
  {
    installmentNo: 4,
    dueDate: '2025-07-01',
    amount: '₹5,000',
    balance: '₹5,000',
    totalBalance: '₹5,000',
  },
  {
    installmentNo: 5,
    dueDate: '2025-08-01',
    amount: '₹5,000',
    balance: '₹5,000',
    totalBalance: '₹0',
  },
];

const FeeDetailsScreen = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <View style={styles.container}>
      <Header title="Fee Details" />
      <ScrollView style={styles.content}>
        {feeData.map((item, index) => (
          <View key={index} style={styles.cardContainer}>
            <TouchableOpacity onPress={() => toggleExpand(index)} style={styles.cardHeader}>
              <Text style={styles.cardTitle}>Installment #{item.installmentNo}</Text>
              <Icon
                name={expandedIndex === index ? 'expand-less' : 'expand-more'}
                size={24}
                color="#000"
              />
            </TouchableOpacity>

            {expandedIndex === index && (
              <View style={styles.cardBody}>
                <Text style={styles.detailText}>Due Date: {item.dueDate}</Text>
                <Text style={styles.detailText}>Amount: {item.amount}</Text>
                <Text style={styles.detailText}>Balance: {item.balance}</Text>
                <Text style={styles.detailText}>Total Balance: {item.totalBalance}</Text>
              </View>
            )}
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
  },
  content: {
    padding: 15,
    marginTop: 20,
  },
  cardContainer: {
    marginBottom: 10,
    backgroundColor: '#FFFBE9',
    borderRadius: 8,
    overflow: 'hidden',
    elevation: 2,
  },
  cardHeader: {
    backgroundColor: '#FFD700',
    paddingVertical: 15,
    paddingHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  cardBody: {
    padding: 15,
    backgroundColor: '#FFFBE9',
  },
  detailText: {
    fontSize: 14,
    color: '#333',
    marginBottom: 5,
  },
});

export default FeeDetailsScreen;
