import React from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import Header from '../components/Header';

// Sample test data (empty array for no data scenario)
const testData = []; // Add objects in this array to see test details

const ActiveTestsScreen = () => {
    return (
        <View style={styles.container}>
            <Header title="Active Tests" />
            
            {/* Search Bar */}
            <ScrollView style={{flex:1}}>

            {/* Horizontal ScrollView for Tabs and Test Data */}
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View>
                    {/* Yellow Section with Tabs */}
                    <View style={styles.yellowSection}>
                        {['Test Name', 'Status', 'Result & Analysis', 'Download Answer Keys'].map((item, index) => (
                            <TouchableOpacity key={index} style={styles.tab}>
                                <Text style={styles.tabText}>{item}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>

                    {/* Test Data or No Test Message */}
                    {testData.length === 0 ? (
                        <View style={styles.noTestContainer}>
                            <Text style={styles.noTestText}>There's no Test Active. Please Contact the administrator</Text>
                        </View>
                    ) : (
                        testData.map((test, index) => (
                            <View key={index} style={styles.testRow}>
                                <Text style={styles.testCell}>{test.name}</Text>
                                <Text style={styles.testCell}>{test.status}</Text>
                                <Text style={styles.testCell}>{test.result}</Text>
                                <TouchableOpacity style={styles.downloadButton}>
                                    <Text style={styles.downloadText}>Download</Text>
                                </TouchableOpacity>
                            </View>
                        ))
                    )}
                </View>
            </ScrollView>

            {/* General Instructions */}
            <View style={styles.instructionsContainer}>
                <Text style={styles.instructionsHeader}>General Instructions :-</Text>
                <Text style={styles.instructionsText}>1. Your clock will be set at the server. The countdown timer at the top right corner of screen will display the remaining time available for you to complete the examination. When the timer reaches zero, the examination will end by itself. You need not to terminate the examination or submit your paper.</Text>
                <Text style={styles.instructionsText}>2. You are not allowed to use any calculator and any other computing machine.</Text>
                <Text style={styles.instructionsText}>3. Click on the question number in the Question Palette to go to that question directly</Text>
                <Text style={styles.instructionsText}>4. Select an answer for a multiple choice type question by clicking on the bubble placed before the 4 choices in the form of radio buttons (o).</Text>
                <Text style={styles.instructionsText}>5. Click on Save & Next to save your answer for the current question and then go to the next question.</Text>
                <Text style={styles.instructionsText}>6. You may click on Mark for Review & Next to save your answer for the current question and also mark it for review, and then go to the next question.</Text>
                <Text style={[styles.instructionsText, styles.cautionText]}>Caution:Note that your answer for the current question will not be saved, if you navigate to another question directly by clicking on a question number without saving the answer to the previous question</Text>
                <Text style={styles.instructionsText}>7. To deselect your chosen answer, click on the bubble of the chosen option again or click on the Clear Response button.</Text>
            </View>
            </ScrollView>
            </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8F8F8',
    },
    yellowSection: {
        flexDirection: 'row',
        backgroundColor: '#FFD700',
        marginHorizontal: 15,
        marginTop: 55,
        paddingVertical: 15,
        alignItems: 'center',
        elevation:3
    },
    tab: {
        paddingHorizontal: 20,
        paddingVertical: 15,
    },
    tabText: {
        fontWeight: 'bold',
        color: '#000',
    },
    noTestContainer: {
        backgroundColor: '#FFFBE9',
        marginHorizontal: 15,
        // marginTop: 15,
        paddingVertical: 15,
        alignItems: 'center',
        justifyContent: 'center',
        height: 100, // Ensures proper centering
        elevation:3,
        borderBottomColor:'#000',
        borderBottomWidth:1,

    },
    noTestText: {
        color: 'red',
        fontWeight: 'semibold',
        textAlign: 'center',
    },
    testRow: {
        flexDirection: 'row',
        backgroundColor: '#FFF',
        paddingVertical: 10,
        paddingHorizontal: 10,
        marginVertical: 5,
        marginHorizontal: 10,
        borderRadius: 8,
        elevation: 3,
        alignItems: 'center',
    },
    testCell: {
        width: 120,
        textAlign: 'center',
        fontSize: 14,
        fontWeight: 'bold',
    },
    downloadButton: {
        backgroundColor: '#4CAF50',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 5,
    },
    downloadText: {
        color: '#FFF',
        fontWeight: 'bold',
    },
    instructionsContainer: {
        paddingVertical: 15,
        paddingHorizontal: 15,
        marginTop:50,
    },
    instructionsHeader: {
        fontWeight: 'bold',
        fontSize: 18,
        color: 'red',
        textDecorationLine:'underline'
    },
    instructionsText: {
        fontSize: 14,
        marginVertical: 5,
        
    },
    cautionText: {
        fontWeight: 'bold',
        color: 'red',
    },
});

export default ActiveTestsScreen;
