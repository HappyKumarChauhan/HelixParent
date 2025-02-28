import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Header from '../components/Header';
import { useNavigation } from '@react-navigation/native';

const UploadVerificationScreen = () => {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Header title="Covid Vaccine" />
      <ScrollView contentContainerStyle={{padding:15}}> 
        <Text style={styles.infoText}>
          Covid vaccine certificate{' '}
          <Text style={styles.redText}>(Please Ignore If the Certificate is already Uploaded)</Text>
        </Text>

        <Text style={styles.label}>Age Group*</Text>
        <View style={styles.pickerContainer}></View>

        <Text style={styles.label}>Date of Birth*</Text>
        <View style={styles.dobContainer}>
          <TextInput placeholder="Day" style={styles.dobInput} keyboardType="numeric" />
          <TextInput placeholder="Month" style={styles.dobInput} keyboardType="numeric" />
          <TextInput placeholder="Year" style={styles.dobInput} keyboardType="numeric" />
        </View>

        <Text style={styles.label}>Vaccination Status*</Text>
        <View style={styles.pickerContainer}></View>

        <Text style={styles.label}>
          Upload Certificate* <Text style={styles.redText}>(only pdf allowed)</Text>
        </Text>
        <TouchableOpacity style={styles.uploadButton}>
          <Icon name="attach-file" size={20} color="#000" />
          <Text style={styles.uploadText}>Choose file</Text>
        </TouchableOpacity>

        <View style={styles.infoContainer}>
          <Text style={styles.infoTitle}>How to download COVID-19 Vaccination Certificate</Text>
          <Text style={styles.infoText}>
            ● You can download your vaccination certificate from{' '}
            <Text style={styles.link}>https://www.cowin.gov.in/</Text>
          </Text>
          <Text style={styles.infoText}>● Sign in using your registered mobile number. You will get OTP for login.</Text>
          <Text style={styles.infoText}>● After login, download your certificate of vaccination.</Text>
        </View>

        <TouchableOpacity style={styles.submitButton}
        onPress={() => navigation.navigate('VerificationTwo')}>
          <Text style={styles.submitText}>Submit</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
  },
  infoText: {
    fontSize: 14,
    color: '#000',
    marginBottom: 10,
  },
  redText: {
    color: 'red',
    fontWeight: 'bold',
  },
  label: {
    fontSize: 14,
    fontWeight: 'bold',
    marginVertical: 15,
  },
  pickerContainer: {
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    padding:20
  },
  dobContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  dobInput: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    padding:10,
    textAlign: 'center',
    marginHorizontal: 5,
  },
  uploadButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginTop: 5,
  },
  uploadText: {
    marginLeft: 10,
    color: '#000',
  },
  infoContainer: {
    backgroundColor: '#fff',
    borderRadius: 8,
    marginTop: 15,
  },
  infoTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    marginVertical: 15,
  },
  link: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
  submitButton: {
    backgroundColor: '#FFD700',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  submitText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default UploadVerificationScreen;
