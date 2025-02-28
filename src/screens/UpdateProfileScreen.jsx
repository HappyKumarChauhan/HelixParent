// import React from 'react';
// import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, Image } from 'react-native';
// import Icon from 'react-native-vector-icons/MaterialIcons';
// import { useNavigation } from '@react-navigation/native';

// const UpdateProfileScreen = () => {
//     const navigation = useNavigation();
  
//     return (
//         <View style={styles.container}>
//             {/* Header Section */}
//             <View style={styles.header}>
//                 <TouchableOpacity style={styles.menuIcon} onPress={() => navigation.openDrawer()}>
//                     <Icon name="menu" size={28} color="white" />
//                 </TouchableOpacity>
//                 <Text style={styles.headerTitle}>Welcome Back</Text>
//                 <Text style={styles.userName}>ADAA DESWAL!!</Text>
//                 <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/147/147144.png' }} style={styles.avatar} />
//             </View>
  
//             {/* Form Section */}
//             <ScrollView contentContainerStyle={styles.content}>
//                 <Text style={styles.sectionTitle}>Edit Profile</Text>
                
//                 {/* Details Section with Icon */}
//                 <View style={styles.formContainer}>
//                     <View style={styles.detailsHeader}>
//                         <Text style={styles.detailsText}>Details</Text>
//                         <Icon name="keyboard-arrow-down" size={24} color="black" />
//                     </View>
                    
//                     <View style={styles.inputRow}>
//                         <Text style={styles.label}>Username:</Text>
//                         <TextInput style={styles.input} value="ADAADESWAL@GMAIL.COM" editable={false} />
//                     </View>
  
//                     <View style={styles.inputRow}>
//                         <Text style={styles.label}>Name:</Text>
//                         <TextInput style={styles.input} value="ADAA DESWAL" />
//                     </View>
  
//                     <View style={styles.inputRow}>
//                         <Text style={styles.label}>Phone Number:</Text>
//                         <TextInput style={styles.input} value="7696474742" keyboardType="numeric" />
//                     </View>
  
//                     <View style={styles.inputRow}>
//                         <Text style={styles.label}>Gender:</Text>
//                         <TextInput style={styles.input} value="Female" />
//                     </View>
  
//                     <View style={styles.inputRow}>
//                         <Text style={styles.label}>Courier Address:</Text>
//                         <TextInput style={styles.input} value="ADAA DESWAL" />
//                     </View>
  
//                     <View style={styles.inputRow}>
//                         <Text style={styles.label}>Father's Name:</Text>
//                         <TextInput style={styles.input} value="ADAA DESWAL" />
//                     </View>
  
//                     <TouchableOpacity style={styles.saveButton}>
//                         <Text style={styles.buttonText}>Save Changes</Text>
//                     </TouchableOpacity>
  
//                     <TouchableOpacity style={styles.cancelButton}>
//                         <Text style={styles.buttonText}>Cancel</Text>
//                     </TouchableOpacity>
//                 </View>
//             </ScrollView>
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#F8F8F8',
//     },
//     header: {
//         backgroundColor: '#3B3B93',
//         padding: 20,
//         alignItems: 'center',
//         borderBottomLeftRadius: 20,
//         borderBottomRightRadius: 20,
//     },
//     menuIcon: {
//         position: 'absolute',
//         left: 15,
//         top: 20,
//     },
//     headerTitle: {
//         color: '#FFC107',
//         fontSize: 16,
//         fontWeight: 'bold',
//         marginTop: 70,
//     },
//     userName: {
//         color: '#fff',
//         fontSize: 20,
//         fontWeight: 'bold',
//     },
//     avatar: {
//         position: 'absolute',
//         right: 15,
//         top: 20,
//         width: 40,
//         height: 40,
//         borderRadius: 20,
//     },
//     content: {
//         padding: 15,
//     },
//     sectionTitle: {
//         fontSize: 18,
//         fontWeight: 'bold',
//         marginVertical: 10,
//     },
//     detailsHeader: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         justifyContent: 'flex-start',
//         backgroundColor: '#fff',
//         padding: 1,
//         borderRadius: 10,
//         marginBottom: 10,
//     },
//     detailsText: {
//         fontSize: 16,
//         fontWeight: 'bold',
//     },
//     formContainer: {
//         backgroundColor: '#fff',
//         padding: 15,
//         borderRadius: 10,
//         elevation: 3,
//     },
//     inputRow: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         justifyContent: 'space-between',
//         marginTop: 15,
//         backgroundColor: '#fff',
//         borderBottomWidth: 1,
//         borderBottomColor: 'gold',
//         elevation: 2,
//         shadowColor: '#000',
//         shadowOffset: { width: 0, height: 1 },
//         shadowOpacity: 0.2,
//         shadowRadius: 3,
//         borderRadius:6,
        
//     },
//     label: {
//         fontSize: 14,
//         fontWeight: 'bold',
//         width: '40%',
//         marginLeft:10
//     },
//     input: {
//         padding: 10,
//         width: '55%',
        
//     },
//     saveButton: {
//         backgroundColor: '#FFD700',
//         padding: 12,
//         borderRadius: 8,
//         alignItems: 'center',
//         marginTop: 20,
//     },
//     cancelButton: {
//         backgroundColor: 'red',
//         padding: 12,
//         borderRadius: 8,
//         alignItems: 'center',
//         marginTop: 10,
//     },
//     buttonText: {
//         color: '#fff',
//         fontWeight: 'bold',
//         fontSize: 16,
//     },
// });

// export default UpdateProfileScreen;
import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

const UpdateProfileScreen = () => {
    const navigation = useNavigation();
    const [gender, setGender] = useState('Female');
    const [genderDropdown, setGenderDropdown] = useState(false);
  
    return (
        <View style={styles.container}>
            {/* Header Section */}
            <View style={styles.header}>
                <TouchableOpacity style={styles.menuIcon} onPress={() => navigation.openDrawer()}>
                    <Icon name="menu" size={30} color="white" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Welcome Back</Text>
                <Text style={styles.userName}>ADAA DESWAL!!</Text>
                <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/147/147144.png' }} style={styles.avatar} />
            </View>
  
            {/* Form Section */}
            <ScrollView contentContainerStyle={styles.content}>
                <Text style={styles.sectionTitle}>Edit Profile</Text>
                
                {/* Details Section with Icon */}
                <View style={styles.formContainer}>
                    <View style={styles.detailsHeader}>
                        <Text style={styles.detailsText}>Details</Text>
                        <Icon name="keyboard-arrow-down" size={24} color="black" />
                    </View>
                    
                    {[{ label: "Username:", value: "ADAADESWAL@GMAIL.COM", editable: false },
                      { label: "Name:", value: "ADAA DESWAL" },
                      { label: "Phone Number:", value: "7696474742", keyboardType: "numeric" },
                      { label: "Courier Address:", value: "ADAA DESWAL" },
                      { label: "Father's Name:", value: "ADAA DESWAL" }
                    ].map((item, index) => (
                        <View key={index} style={styles.inputRow}>
                            <Text style={styles.label}>{item.label}</Text>
                            <TextInput 
                                style={styles.input} 
                                value={item.value} 
                                editable={item.editable !== false} 
                                keyboardType={item.keyboardType || "default"} 
                            />
                        </View>
                    ))}
                    
                    <View style={styles.inputRow}>
                        <Text style={styles.label}>Gender:</Text>
                        <TouchableOpacity style={styles.dropdown} onPress={() => setGenderDropdown(!genderDropdown)}>
                            <Text>{gender}</Text>
                            <Icon name={genderDropdown ? "keyboard-arrow-up" : "keyboard-arrow-down"} size={24} color="black" />
                        </TouchableOpacity>
                        {genderDropdown && (
                            <View style={styles.dropdownOptions}>
                                <TouchableOpacity onPress={() => { setGender('Male'); setGenderDropdown(false); }}>
                                    <Text style={styles.dropdownText}>Male</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { setGender('Female'); setGenderDropdown(false); }}>
                                    <Text style={styles.dropdownText}>Female</Text>
                                </TouchableOpacity>
                            </View>
                        )}
                    </View>
  
                    <TouchableOpacity style={styles.saveButton}>
                        <Text style={styles.buttonText}>Save Changes</Text>
                    </TouchableOpacity>
  
                    <TouchableOpacity style={styles.cancelButton}>
                        <Text style={styles.buttonText}>Cancel</Text>
                    </TouchableOpacity>
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
    header: {
        backgroundColor: '#3B3B93',
        padding: 20,
        alignItems: 'center',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    menuIcon: {
        position: 'absolute',
        left: 15,
        top: 20,
    },
    headerTitle: {
        color: '#FFC107',
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 70,
    },
    userName: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    },
    avatar: {
        position: 'absolute',
        right: 15,
        top: 20,
        width: 35,
        height: 35,
        borderRadius: 20,
    },
    content: {
        padding: 15,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 10,
    },
    detailsHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: '#fff',
        padding: 1,
        borderRadius: 10,
        marginBottom: 10,
    },
    detailsText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    formContainer: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 10,
        elevation: 3,
    },
    inputRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'gold',
        paddingBottom: 5,
    },
    label: {
        fontSize: 14,
        fontWeight: 'bold',
        flex: 1,
    },
    input: {
        backgroundColor: '#fff',
        flex: 0,
        color:'#747474'
    },
    dropdown: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        backgroundColor: '#fff',
        flex: 0,
        alignItems: 'center',
        
    },
    dropdownOptions: {
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 5,
    },
    dropdownText: {
        paddingVertical: 5,
        paddingHorizontal: 5,
        color:'#747474'
    },
    saveButton: {
        backgroundColor: '#FFD700',
        padding: 12,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 20,
    },
    cancelButton: {
        backgroundColor: 'red',
        padding: 12,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 10,
    },
    buttonText: {
        color: '#000',
        fontWeight: 'bold',
        fontSize: 16,
    },
});

export default UpdateProfileScreen;
