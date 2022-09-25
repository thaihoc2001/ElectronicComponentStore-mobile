import { TextInput } from '@react-native-material/core';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

export default function Login() {
    return (
        <View style={styles.container}>
            <TextInput 
                style={styles.input} 
                variant="outlined"
                leading={props => <Icon name="account" {...props} />}
            />
            <TextInput 
                label="Password" 
                secureTextEntry={true} 
                style={styles.input}
                variant="outlined"
                leading={props => <Icon name="lock" {...props} />}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '90%'
    },
    input:{
        marginTop: '1%',
        width: '100%',
    }
})