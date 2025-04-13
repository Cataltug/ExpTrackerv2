import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native';


const width = Dimensions.get("screen").width;

const Button = ({ title, onPress, backgroundColor = 'lightcoral', textColor = '#2c3e50', style }) => {
  return (
    <TouchableOpacity 
      style={[styles.button, { backgroundColor: backgroundColor, width: width * 0.65 }, style]} 
      onPress={onPress}
    >
      <Text style={[styles.buttonText, { color: textColor }]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: "#2c3e50"
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "500",
  }
});

export default Button;