import { View, Text, FlatList, ScrollView, TouchableOpacity, Dimensions, ImageBackground } from 'react-native'
import React, { useEffect, useState } from 'react'
import components from '../../components'
import { useNavigation } from '@react-navigation/native'
import Button from '../../components/Button'
import data from "../../mock_data/expenses.json"

const {SafeScreen} = components;

const width = Dimensions.get("screen").width;

function ListItem({ item, onPress }) {
  const deNavigation = useNavigation();
  return (
    <TouchableOpacity activeOpacity={0.7} style={{height: 100, marginHorizontal: 10, 
    marginVertical: 15, justifyContent: "center", borderBottomWidth: 1, borderColor: "lightcoral"}} onPress={() => deNavigation.navigate("Details", { expense: item, deleteExpense: onPress })}>
      <View style={{ marginLeft: 10 }}>
      <Text style={{ color: "Black", fontWeight: "bold", fontSize: 16 }}>{item.title}</Text>
      <Text style={{ color: "Black", fontWeight: "bold", fontSize: 14 }}>{item.amount} ₺</Text>
      <Text style={{ color: "#2c3e50", fontSize: 14, fontWeight:400 }}>Date: {item.date}</Text>
      <Text style={{ color: "#2c3e50", fontSize: 14, fontWeight:400 }}>Category: {item.category}</Text>
    </View>
    </TouchableOpacity>
  );
}

function Home({ route }) {
  const navigation = useNavigation();
  const [expenses, setExpenses] = useState(data); //delete data and add [] to remove mock_data
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
            <Text style={{fontSize:36, textAlign: "center", color: "#2c3e50"}}>Control your expenses!</Text>
            

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
                  <View key={category} style={{ width: width,
                  padding: 10,
                  backgroundColor: "snow",
                  borderRadius: 8,
                  borderWidth:0.5,
                  alignItems: "center",
                  opacity: 0.9}}>
                    <TouchableOpacity onPress={() => navigation.navigate("CategoryExpenses", { category, expenses })}>
                      <Text style={{ fontSize: 20, color: "black", marginTop:8, fontWeight:"bold" }}>{category}</Text>
                      <Text style={{color: "#2c3e50", fontWeight:"bold"}}>Total money spent: {getCategoryTotal(category)} ₺</Text>
                    </TouchableOpacity>
                  </View>
                ))}
              </ScrollView>
            </View>

            <View style={{flex: 0.82, backgroundColor: "snow",borderRadius:8}}>
              <FlatList
                data={expenses}
                renderItem={({ item }) => <ListItem item={item} onPress={deleteExpense} />}
                ListEmptyComponent={<Text style={{ marginTop: 20, marginLeft: 20, color:"black", fontWeight:"bold" }}>No expenses added yet.</Text>
                }
              />
            </View>
          </View>
      </SafeScreen>
    </ImageBackground>
  );
}

export default Home;