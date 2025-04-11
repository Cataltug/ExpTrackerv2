import { View, Text, FlatList, ScrollView, TouchableOpacity, Dimensions, ImageBackground } from 'react-native'
import React, { useEffect, useState } from 'react'
import components from '../../components'
import { useNavigation } from '@react-navigation/native'
import Button from '../../components/Button'

const {SafeScreen} = components;

const width = Dimensions.get("screen").width;

function ListItem({ item, onPress }) {
  const deNavigation = useNavigation();
  return (
    <TouchableOpacity activeOpacity={0.7} style={{backgroundColor: "dimgray", height: 85, marginHorizontal: 25, 
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

  useEffect(() => {
    const newCategories = [...new Set(expenses.map(exp => exp.category))];
    setCategories(newCategories);
  }, [expenses]);

  const deleteExpense = (expenseToDelete) => {
    setExpenses(prevExpenses => prevExpenses.filter(expense => expense.created !== expenseToDelete.created));
  };

  const getCategoryTotal = (category) => {
    return expenses.filter(exp => exp.category === category).reduce((total, exp) => total + parseFloat(exp.amount), 0);
  };

  return (
      <ImageBackground
        source={require("../../assets/image.jpg")}
        style={{ flex: 1 }}
      >
        <SafeScreen>
          <View style={{flex: 1}}>
            <Text style={{fontSize:36, textAlign: "center", color: "snow"}}>Expenses</Text>
            

            <View style={{marginHorizontal: 25, borderRadius: 8, marginVertical: 25, width: width * 0.65, alignSelf: "center" }}>
              <Button title='Add Expense' onPress={() => navigation.navigate("AddScreen")} />
            </View>
            <View style={{borderRadius: 8, width: width * 0.65, alignSelf: "center", marginBottom:25 }}>
              <Button title='Categories' onPress={() => navigation.navigate("Category", { expenses })} />
            </View>


            <View style={{flex: 0.15}}>
              <ScrollView 
                horizontal={true} 
                style={{flex: 1, marginVertical: 10}} 
                pagingEnabled
              >
                {categories.map(category => (
                  <View key={category} style={{ width: width, padding: 10, backgroundColor: "darkgray", borderRadius: 8, marginRight: 10, alignItems: "center" }}>
                    <TouchableOpacity onPress={() => navigation.navigate("CategoryExpenses", { category, expenses })}>
                      <Text style={{ fontSize: 18, color: "black", marginTop:8 }}>{category}</Text>
                      <Text style={{color: "black"}}>Total money spent: {getCategoryTotal(category)} ₺</Text>
                    </TouchableOpacity>
                  </View>
                ))}
              </ScrollView>
            </View>

            <View style={{flex: 0.8}}>
              <FlatList
                data={expenses}
                renderItem={({ item }) => <ListItem item={item} onPress={deleteExpense} />}
                ListEmptyComponent={<Text style={{ marginTop: 10, marginLeft: 20, color:"snow" }}>No expenses added yet.</Text>}
              />
            </View>
          </View>
      </SafeScreen>
    </ImageBackground>
  );
}

export default Home;