import { View, Text, FlatList, Dimensions } from 'react-native';
import React, { useState, useEffect } from 'react';
import { StackActions, useNavigation, useRoute } from '@react-navigation/native';
import Button from '../../components/Button';

const width = Dimensions.get("screen").width;

function CategoryExpenses() {
  const route = useRoute();
  const navigation = useNavigation();
  const { category, expenses } = route.params;


  const filteredExpenses = expenses.filter(exp => exp.category === category);


  const totalAmount = filteredExpenses.reduce((total, expense) => total + parseFloat(expense.amount), 0);

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 36, textAlign: "center" }}>Expenses for {category}</Text>

      <FlatList
        data={filteredExpenses}
        renderItem={({ item }) => (
          <View style={{ padding: 15, backgroundColor: "seagreen", marginVertical: 5, borderRadius: 5 }}>
            <Text style={{ color: "white", fontSize: 18 }}>Title: {item.title}</Text>
            <Text style={{ color: "white" }}>Amount: {item.amount} ₺</Text>
            <Text style={{ color: "white" }}>Date: {item.date}</Text>
            <Text style={{ color: "white" }}>Category: {item.category}</Text>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
        ListEmptyComponent={<Text style={{ marginTop: 10, marginLeft: 20 }}>No expenses found for this category.</Text>}
      />

      <Text style={{ fontSize: 18, fontWeight: "bold", marginTop: 20 }}>
        Total Amount Spent for {category}: {totalAmount.toFixed(2)} ₺
      </Text>

      <View style={{ alignSelf: "center", marginTop: 20 }}>
        <Button title="Go Back" onPress={() => navigation.dispatch(StackActions.popTo("Home"))} />
      </View>
    </View>
  );
}

export default CategoryExpenses;