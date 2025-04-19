import { View, Text, FlatList, Dimensions, ImageBackground } from 'react-native';
import React from 'react';
import { StackActions, useNavigation } from '@react-navigation/native';
import Button from '../../components/Button';
import { useExpenseContext } from '../../../expenseContext';


const width = Dimensions.get("screen").width;

function CategoryExpenses({ route }) {
  const { category } = route.params;
  const { expenses } = useExpenseContext();
  const navigation = useNavigation();

  const filteredExpenses = expenses.filter(exp => exp.category === category);
  const totalAmount = filteredExpenses.reduce((total, expense) => total + parseFloat(expense.amount), 0);

  return (
    <ImageBackground
      source={require("../../assets/image.jpg")}
      style={{ flex: 1 }}
    >
      <View style={{ flex: 1, padding: 20 }}>
        <Text style={{ fontSize: 36, textAlign: "center", color: "#2c3e50" }}>Expenses for {category}</Text>

        <FlatList
          data={filteredExpenses}
          renderItem={({ item }) => (
            <View style={{ padding: 15, backgroundColor: "lavenderblush", marginVertical: 5, borderRadius: 5 }}>
              <Text style={{ color: "black", fontSize: 18, fontWeight: "bold" }}>{item.title}</Text>
              <Text style={{ color: "black", fontWeight: "bold" }}>Amount: {item.amount} ₺</Text>
              <Text style={{ color: "black" }}>Date: {item.date}</Text>
              <Text style={{ color: "black" }}>Category: {item.category}</Text>
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
          ListEmptyComponent={<Text style={{ marginTop: 10, marginLeft: 20 }}>No expenses found for this category.</Text>}
        />

        <Text style={{ fontSize: 18, fontWeight: "bold", marginTop: 20, color: "#2c3e50" }}>
          Total Amount Spent for {category}: {totalAmount.toFixed(2)} ₺
        </Text>

        <View style={{ alignSelf: "center", marginTop: 20, marginBottom: 25 }}>
          <Button title="Go Back" onPress={() => navigation.dispatch(StackActions.popTo("Home"))} />
        </View>
      </View>
    </ImageBackground>
  );
}

export default CategoryExpenses;