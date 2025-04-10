import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Dimensions } from 'react-native';


const width = Dimensions.get("screen").width;

const InputField = ({ title, placeholder, onChangeText, field }) => {

    const [text, setText] = useState(''); // TextInput için state yönetimi

    const handleChangeText = (input) => {
        setText(input);
        onChangeText(input, field);
  };


  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          value={text}
          onChangeText={handleChangeText}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginBottom: 10
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    marginLeft: 10,
    alignSelf: "center"
  },
  inputContainer: {
    borderWidth: 2,
    borderColor: 'gray',
    borderRadius: 5,
    paddingHorizontal: 10,
    width: width * 0.65,
    alignSelf: "center",
    backgroundColor: "darkseagreen"
  },
  input: {
    height: 40,
    fontSize: 16,
    color: "black"
  },
});

export default InputField;