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

// Enable LayoutAnimation on Android
if (Platform.OS === 'android') {
  UIManager.setLayoutAnimationEnabledExperimental &&
    UIManager.setLayoutAnimationEnabledExperimental(true);
}

// Dummy Data
const testData = [
  {
    srNo: 1,
    testName: 'Mock Test 1',
    result: '75%',
    subject: 'Mathematics',
    details: 'Scored high in algebra, but geometry needs improvement.',
  },
  {
    srNo: 2,
    testName: 'Mock Test 2',
    result: '82%',
    subject: 'Physics',
    details: 'Great in mechanics. Optics revision needed.',
  },
  {
    srNo: 3,
    testName: 'Mock Test 3',
    result: '69%',
    subject: 'Chemistry',
    details: 'Focus on organic chemistry topics.',
  },
];

const TestAnalysisScreen = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <View style={styles.container}>
      <Header title="Test Analysis Report" />
      <View style={styles.content}>
        <Text style={styles.infoText}>
          Your test reports are shown below with detailed feedback:
        </Text>

        <ScrollView>
          {testData.length > 0 ? (
            testData.map((item, index) => (
              <View key={index} style={styles.cardContainer}>
                <TouchableOpacity onPress={() => toggleExpand(index)} style={styles.cardHeader}>
                  <Text style={styles.cardTitle}>{item.testName}</Text>
                  <Icon
                    name={expandedIndex === index ? 'expand-less' : 'expand-more'}
                    size={24}
                    color="#000"
                  />
                </TouchableOpacity>

                {expandedIndex === index && (
                  <View style={styles.cardBody}>
                    <Text style={styles.detailText}>Sr No: {item.srNo}</Text>
                    <Text style={styles.detailText}>Subject: {item.subject}</Text>
                    <Text style={styles.detailText}>Result: {item.result}</Text>
                    <Text style={styles.detailText}>Remarks: {item.details}</Text>
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
    backgroundColor: '#FFFBE9',
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
    backgroundColor: '#FFFBE9',
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

export default TestAnalysisScreen;
