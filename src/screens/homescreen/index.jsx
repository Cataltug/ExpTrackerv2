import { View, Text, FlatList, TouchableOpacity, Button, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import data from '../../mock_data/expenses.json'
import components from '../../components'
import { useNavigation } from '@react-navigation/native'

const {SafeScreen} = components;

const width = Dimensions.get("screen").width;

/*const { colors } = theme;

colors.white,
colors.primary*/


function ListItem(item, index) {

  return (
    <TouchableOpacity activeOpacity={0.7} style={{backgroundColor: "seagreen", height: 85, marginHorizontal: 25, 
    marginVertical:10, justifyContent: "center",borderRadius:8}}>
      <View style={{marginLeft: 10}}>
        <Text style={{color: "white"}}>Expense: {item.title}</Text>
        <Text style={{color: "white"}}>Amount: {item.amount} ₺</Text>
        <Text style={{color: "white"}}>Date: {item.date}</Text>
        <Text style={{color: "white"}}>Category: {item.category}</Text>
      </View>
    </TouchableOpacity>
  )

}

function Home({ route }) {
  const navigation = useNavigation();
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
  if (route && route.params && route.params.expense) {
    console.log("Received expense:", route.params.expense);
    

    setExpenses((prevExpenses) => [...prevExpenses, route.params.expense]);
  }
}, [route && route.params && route.params.expense]);

 /*  const filterExpenses = (count) => { filtre örneği
    setExpenses(expenses.filter((t, idx) => idx < count));
  } */ 

  return (
    <SafeScreen>
        <View style={{flex: 1}}>
            <Text style={{fontSize:36, textAlign: "center"}}>Expenses</Text>
            <View style={{marginHorizontal: 25, borderRadius: 8, marginVertical: 20, width: width * 0.65, alignSelf: "center" }}>
              <Button title='Add Expense' onPress={() => navigation.navigate("AddScreen")} />
            </View>
            <FlatList
            data = {expenses}
            renderItem={({ item, index }) => ListItem(item, index)}
            ListEmptyComponent={<Text style={{marginTop:10, marginLeft:20}}>No expenses added yet.</Text>}
            />
        </View>
    </SafeScreen>
  )
}

export default Home;