// import React from 'react';
// import { View, Text, StyleSheet, ScrollView } from 'react-native';
// import Header from '../components/Header';

// const TestAnalysisScreen = () => {
//   return (
//     <View style={styles.container}>
//       <Header title="Test Analysis Report" />

//       <View style={styles.content}>
//         <ScrollView horizontal showsHorizontalScrollIndicator={false}>
//           <View>
//             {/* Table Header */}
//             <View style={styles.tableHeader}>
//               <Text style={styles.headerCell}>Sr No.</Text>
//               <Text style={styles.headerCell}>Test Name</Text>
//               <Text style={styles.headerCell}>Result</Text>
//               <Text style={styles.headerCell}>Subject Name</Text>
//             </View>

//             {/* No Data Found Message */}
//             <View style={styles.noDataContainer}>
//               <Text style={styles.noDataText}>No Data Found</Text>
//             </View>
//           </View>
//         </ScrollView>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#F8F8F8',
//   },
//   content: {
//     flex: 1,
//     padding: 15,
//   },
//   tableHeader: {
//     flexDirection: 'row',
//     backgroundColor: '#FFD700',
//     paddingVertical: 10,
//     paddingHorizontal: 10,
//   },
//   headerCell: {
//     fontWeight: 'bold',
//     fontSize: 14,
//     width: 120, 
//     textAlign: 'center',
//   },
//   noDataContainer: {
//     flexDirection: 'row',
//     backgroundColor: '#FFF8DC',
//     paddingVertical: 10,
//     paddingHorizontal: 10,
//   },
//   noDataText: {
//     color: 'red',
//     fontSize: 14,
//     marginLeft: 10,
//   },
// });

// export default TestAnalysisScreen;
import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Header from '../components/Header';

// Empty Data Array
const testData = [];

const TestAnalysisScreen = () => {
  return (
    <View style={styles.container}>
      <Header title="Test Analysis Report" />

      <View style={styles.content}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View>
            {/* Table Header */}
            <View style={styles.tableHeader}>
              <Text style={styles.headerCell}>Sr No.</Text>
              <Text style={styles.headerCell}>Test Name</Text>
              <Text style={styles.headerCell}>Result</Text>
              <Text style={styles.headerCell}>Subject Name</Text>
            </View>

            {/* Show "No Data Found" when the array is empty */}
            {testData.length === 0 ? (
              <View style={styles.noDataContainer}>
                <Text style={styles.noDataText}>No Data Found</Text>
              </View>
            ) : (
              testData.map((item, index) => (
                <View key={index} style={styles.tableRow}>
                  <Text style={styles.rowCell}>{item.srNo}</Text>
                  <Text style={styles.rowCell}>{item.testName}</Text>
                  <Text style={styles.rowCell}>{item.result}</Text>
                  <Text style={styles.rowCell}>{item.subject}</Text>
                </View>
              ))
            )}
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
    justifyContent: 'center', // Centering "No Data Found" text
    alignItems: 'center',
  },
  tableHeader: {
    flexDirection: 'row',
    backgroundColor: '#FFD601',
    paddingVertical: 30,
    paddingHorizontal: 10,
    marginTop:45
  },
  noDataContainer: {
    // marginTop: 0,
    alignItems: 'center',
    backgroundColor:'#FFFBE9',
    paddingVertical:30,


  },
  noDataText: {
    color: 'red',
    fontSize: 16,
    fontWeight: 'semibold',
    backgroundColor:'#FFFBE9'
  },
  tableRow: {
    flexDirection: 'row',
    backgroundColor: 'FFFBE9',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  headerCell: {
    fontWeight: 'bold',
    fontSize: 14,
    width: 120, 
    textAlign: 'center',
  },
  rowCell: {
    fontSize: 14,
    width: 120,
    textAlign: 'center',
  },
});

export default TestAnalysisScreen;

