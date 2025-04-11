import { View, Text, Dimensions, StyleSheet, ScrollView } from 'react-native';
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
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.custom}>
        <Text style={{ fontSize: 24 }}>{title} expense details</Text>
        <View style={{ marginTop: 20 }}>
          <Text style={{ fontSize: 18 }}>Amount: {amount}</Text>
          <Text style={{ fontSize: 18 }}>Date: {date}</Text>
          <Text style={{ fontSize: 18 }}>Category: {category}</Text>
        </View>
        <View style={{ marginTop: 20, alignSelf: "center" }}>
          <Button title="Delete Expense" onPress={handleDelete} />
        </View>
      </View>
    </ScrollView>
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
    backgroundColor: "darkseagreen",
    padding: 20,
    borderRadius: 8,
    width: '80%',
    alignItems: "flex-start",
  }
});

export default Details;