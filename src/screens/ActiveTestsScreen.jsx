import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
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

const testData = [
    {
        name: 'Mathematics Final Test',
        status: 'Active',
        result: 'Not Released',
    },
    {
        name: 'Science Practice Test',
        status: 'Completed',
        result: 'View Result',
    },
    {
        name: 'English Grammar Test',
        status: 'Active',
        result: 'Not Released',
    },
];

const ActiveTestsScreen = () => {
    const [expandedIndex, setExpandedIndex] = useState(null);

    const toggleExpand = (index) => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
        <View style={styles.container}>
            <Header title="Active Tests" />
            <ScrollView style={{ flex: 1 }}>
                <View style={styles.testCardWrapper}>
                    {testData.length === 0 ? (
                        <View style={styles.noTestContainer}>
                            <Text style={styles.noTestText}>
                                There's no Test Active. Please Contact the administrator
                            </Text>
                        </View>
                    ) : (
                        testData.map((test, index) => (
                            <View key={index} style={styles.testCard}>
                                <TouchableOpacity
                                    style={styles.cardHeader}
                                    onPress={() => toggleExpand(index)}
                                >
                                    <Text style={styles.cardTitle}>{test.name}</Text>
                                    <Icon
                                        name={expandedIndex === index ? 'expand-less' : 'expand-more'}
                                        size={24}
                                        color="#000"
                                    />
                                </TouchableOpacity>

                                {expandedIndex === index && (
                                    <View style={styles.cardContent}>
                                        <Text style={styles.testDetail}>Status: {test.status}</Text>
                                        <Text style={styles.testDetail}>Result: {test.result}</Text>
                                        <TouchableOpacity style={styles.downloadButton}>
                                            <Text style={styles.downloadText}>Download Answer Key</Text>
                                        </TouchableOpacity>
                                    </View>
                                )}
                            </View>
                        ))
                    )}
                </View>

                <View style={styles.instructionsContainer}>
                    <Text style={styles.instructionsHeader}>General Instructions :-</Text>
                    <Text style={styles.instructionsText}>
                        1. Your clock will be set at the server. The countdown timer at the top right corner of
                        screen will display the remaining time available for you to complete the examination.
                        When the timer reaches zero, the examination will end by itself. You need not to terminate
                        the examination or submit your paper.
                    </Text>
                    <Text style={styles.instructionsText}>
                        2. You are not allowed to use any calculator and any other computing machine.
                    </Text>
                    <Text style={styles.instructionsText}>
                        3. Click on the question number in the Question Palette to go to that question directly
                    </Text>
                    <Text style={styles.instructionsText}>
                        4. Select an answer for a multiple choice type question by clicking on the bubble placed
                        before the 4 choices in the form of radio buttons (o).
                    </Text>
                    <Text style={styles.instructionsText}>
                        5. Click on Save & Next to save your answer for the current question and then go to the next question.
                    </Text>
                    <Text style={styles.instructionsText}>
                        6. You may click on Mark for Review & Next to save your answer for the current question and also mark it for review, and then go to the next question.
                    </Text>
                    <Text style={[styles.instructionsText, styles.cautionText]}>
                        Caution: Note that your answer for the current question will not be saved, if you navigate
                        to another question directly by clicking on a question number without saving the answer to
                        the previous question
                    </Text>
                    <Text style={styles.instructionsText}>
                        7. To deselect your chosen answer, click on the bubble of the chosen option again or click
                        on the Clear Response button.
                    </Text>
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
    testCardWrapper: {
        padding: 15,
        marginTop: 20,
    },
    noTestContainer: {
        backgroundColor: '#FFFBE9',
        padding: 20,
        borderRadius: 10,
        elevation: 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    noTestText: {
        color: 'red',
        fontWeight: '600',
        textAlign: 'center',
    },
    testCard: {
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        marginBottom: 15,
        elevation: 3,
        overflow: 'hidden',
    },
    cardHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15,
        alignItems: 'center',
        backgroundColor: '#FFD700',
    },
    cardTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
    },
    cardContent: {
        paddingHorizontal: 15,
        paddingBottom: 15,
        backgroundColor: '#FFFBE9',
    },
    testDetail: {
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    downloadButton: {
        backgroundColor: '#4CAF50',
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 5,
        alignSelf: 'flex-start',
    },
    downloadText: {
        color: '#FFF',
        fontWeight: 'bold',
    },
    instructionsContainer: {
        paddingVertical: 15,
        paddingHorizontal: 15,
        marginTop: 30,
    },
    instructionsHeader: {
        fontWeight: 'bold',
        fontSize: 18,
        color: 'red',
        textDecorationLine: 'underline',
        marginBottom: 10,
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
