import { View, Text, Dimensions, StyleSheet, ScrollView, ImageBackground } from 'react-native';
import React from 'react';
import { useNavigation, StackActions } from '@react-navigation/native';
import Button from '../../components/Button';

const width = Dimensions.get("screen").width;

function Details({ route }) {
  const { expense, deleteExpense } = route.params;
  const { title, amount, date, category } = expense;


  const navigation = useNavigation();

  const handleDelete = () => {
    deleteExpense(expense);
    navigation.dispatch(StackActions.popTo("Home"));
  };

  return (
    <ImageBackground
                source={require("../../assets/image.jpg")}
                style={{ flex: 1 }}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.custom}>
          <Text style={{ fontSize: 24, color: "black",fontWeight: "bold" }}>{title} expense details</Text>
          <View style={{ marginTop: 20 }}>
            <Text style={{ fontSize: 18, color: "black",fontWeight: "bold" }}>Amount: {amount} ₺</Text>
            <Text style={{ fontSize: 18, color: "black" }}>Date: {date}</Text>
            <Text style={{ fontSize: 18, color: "black" }}>Category: {category}</Text>
          </View>
          <View style={{ marginTop: 20, alignSelf: "center" }}>
            <Button title="Delete Expense" onPress={handleDelete} />
          </View>
          
        </View>
      </ScrollView>
            <View style={{alignSelf:"center",marginBottom: 25}}>
              <Button title="Go Back" onPress={() => navigation.dispatch(StackActions.popTo("Home"))} />
            </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  custom: {
    backgroundColor: "lavenderblush",
    padding: 20,
    borderRadius: 8,
    width: '80%',
    alignItems: "flex-start",
  }
});

export default Details;