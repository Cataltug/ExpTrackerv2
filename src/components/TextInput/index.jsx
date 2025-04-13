import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Dimensions } from 'react-native';


const width = Dimensions.get("screen").width;

const InputField = ({ title, placeholder, onChangeText, field }) => {

    const [text, setText] = useState('');
    const [isFocused, setIsFocused] = useState(false);

    const handleChangeText = (input) => {
        setText(input);
        onChangeText(input, field);
  };


  return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <View style={[styles.inputContainer, isFocused && styles.focusedInput]}>
                <TextInput
                    style={styles.input}
                    placeholder={placeholder}
                    value={text}
                    onChangeText={handleChangeText}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    placeholderTextColor="gray"
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        marginBottom: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
        marginLeft: 10,
        alignSelf: "flex-start",
        color: "#2c3e50",
    },
    inputContainer: {
        borderWidth: 2,
        borderColor: '#BDC3C7',
        borderRadius: 12,
        paddingHorizontal: 15,
        width: width * 0.75,
        alignSelf: "center",
        backgroundColor: "#ECF0F1",
    },
    focusedInput: {
        borderColor: '#34495E',
        backgroundColor: 'lavenderblush',
    },
    input: {
        height: 50,
        fontSize: 16,
        color: "#34495E",
        paddingLeft: 10,
        borderRadius: 12,
    },
});

export default InputField;