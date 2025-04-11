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
        marginBottom: 10
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
        marginLeft: 10,
        alignSelf: "flex-start",
        color: "snow"
    },
    inputContainer: {
        borderWidth: 3,
        borderColor: '#ddd',
        borderRadius: 15,
        paddingHorizontal: 15,
        width: width * 0.75,
        alignSelf: "center",
        backgroundColor: "#fff",
    },
    focusedInput: {
        borderColor: 'darkslategrey',
        backgroundColor: 'honeydew',
    },
    input: {
        height: 50,
        fontSize: 16,
        color: "black",
        paddingLeft: 10,
        borderRadius: 12,
    },
});

export default InputField;