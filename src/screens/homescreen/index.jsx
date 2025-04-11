import { View, Text, FlatList, TouchableOpacity, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import components from '../../components'
import { StackActions, useNavigation } from '@react-navigation/native'
import Button from '../../components/Button'

const {SafeScreen} = components;

const width = Dimensions.get("screen").width;

/*const { colors } = theme;

colors.white,
colors.primary*/

 /*  const filterExpenses = (count) => { filtre örneği
    setExpenses(expenses.filter((t, idx) => idx < count));
  } */ 


function ListItem({ item, onPress }) {
  const deNavigation = useNavigation();
  return (
    <TouchableOpacity activeOpacity={0.7} style={{backgroundColor: "seagreen", height: 85, marginHorizontal: 25, 
    marginVertical: 10, justifyContent: "center",borderRadius: 8}} onPress={() => deNavigation.navigate("Details", { expense: item, deleteExpense: onPress })}>
      <View style={{marginLeft: 10}}>
        <Text style={{color: "white"}}>Expense: {item.title}</Text>
        <Text style={{color: "white"}}>Amount: {item.amount} ₺</Text>
        <Text style={{color: "white"}}>Date: {item.date}</Text>
        <Text style={{color: "white"}}>Category: {item.category}</Text>
      </View>
    </TouchableOpacity>
  );
}

function Home({ route }) {
  const navigation = useNavigation();
  const [expenses, setExpenses] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    if (route && route.params && route.params.expense) {
      setExpenses((prevExpenses) => [...prevExpenses, route.params.expense]);
    }
  }, [route]);


  const deleteExpense = (expenseToDelete) => {
    setExpenses(prevExpenses => prevExpenses.filter(expense => expense.created !== expenseToDelete.created));
  };



  return (
    <SafeScreen>
        <View style={{flex: 1}}>
            <Text style={{fontSize:36, textAlign: "center"}}>Expenses</Text>
            <View style={{marginHorizontal: 25, borderRadius: 8, marginVertical: 25, width: width * 0.65, alignSelf: "center" }}>
              <Button title='Add Expense' onPress={() => navigation.navigate("AddScreen")} />
            </View>
            <View style={{borderRadius: 8, width: width * 0.65, alignSelf: "center", marginBottom:25 }}>
              <Button title='Categories' onPress={() => navigation.navigate("Category", { expenses })} />
            </View>
            <FlatList
              data={expenses}
              renderItem={({ item }) => <ListItem item={item} onPress={deleteExpense} />}
              ListEmptyComponent={<Text style={{ marginTop: 10, marginLeft: 20 }}>No expenses added yet.</Text>}
            />
        </View>
    </SafeScreen>
  )
}

export default Home;