import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  LayoutAnimation,
  Platform,
  UIManager,
  ScrollView,
} from 'react-native';
import Header from '../components/Header';
import Icon from 'react-native-vector-icons/MaterialIcons';

if (Platform.OS === 'android') {
  UIManager.setLayoutAnimationEnabledExperimental &&
    UIManager.setLayoutAnimationEnabledExperimental(true);
}

const messagesData = [
  {
    srNo: 1,
    title: 'Issue with Payment',
    date: '2025-03-20',
    reply: 'We have escalated your payment issue to the billing team. It will be resolved within 24 hours.',
  },
  {
    srNo: 2,
    title: 'KYC Verification Delay',
    date: '2025-03-18',
    reply: 'Your documents are under review. You will receive an update by tomorrow.',
  },
  {
    srNo: 3,
    title: 'Event Registration Confirmation',
    date: '2025-03-15',
    reply: 'Your registration for “RG Music Fest 2025” is confirmed. See you there!',
  },
  {
    srNo: 4,
    title: 'Unable to Upload Track',
    date: '2025-03-12',
    reply: 'Please compress your audio file under 10MB and try again.',
  },
  {
    srNo: 5,
    title: 'Profile Picture Not Updating',
    date: '2025-03-10',
    reply: 'Try clearing the app cache or updating to the latest version from the Play Store.',
  },
];


const MessagesScreen = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpandedIndex(index === expandedIndex ? null : index);
  };

  return (
    <View style={styles.container}>
      <Header title="Messages" />
      <View style={styles.content}>
        <Text style={styles.infoText}>
          The messages you have sent will be shown here with details:
        </Text>

        <ScrollView>
          {messagesData.length > 0 ? (
            messagesData.map((item, index) => (
              <View key={index} style={styles.cardContainer}>
                <TouchableOpacity onPress={() => toggleExpand(index)} style={styles.cardHeader}>
                  <Text style={styles.cardTitle}>{item.title}</Text>
                  <Icon
                    name={expandedIndex === index ? 'expand-less' : 'expand-more'}
                    size={24}
                    color="#000"
                  />
                </TouchableOpacity>

                {expandedIndex === index && (
                  <View style={styles.cardBody}>
                    <Text style={styles.detailText}>Sr No: {item.srNo}</Text>
                    <Text style={styles.detailText}>Date: {item.date}</Text>
                    <Text style={styles.detailText}>Reply: {item.reply}</Text>
                  </View>
                )}
              </View>
            ))
          ) : (
            <View style={styles.noDataContainer}>
              <Text style={styles.noDataText}>No Data Found</Text>
            </View>
          )}
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
    marginVertical: 20,
    fontWeight: 'bold',
  },
  cardContainer: {
    marginBottom: 10,
    backgroundColor: '#FFF8DC',
    borderRadius: 8,
    overflow: 'hidden',
    elevation: 2,
  },
  cardHeader: {
    backgroundColor: '#FFD601',
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
    backgroundColor: '#FFF8DC',
  },
  detailText: {
    fontSize: 14,
    color: '#333',
    marginBottom: 5,
  },
  noDataContainer: {
    marginTop: 50,
    alignItems: 'center',
  },
  noDataText: {
    fontSize: 14,
    color: 'red',
  },
});

export default MessagesScreen;
