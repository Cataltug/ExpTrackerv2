import { View, Text, FlatList, TouchableOpacity, Dimensions } from 'react-native';
import React, { useState, useEffect } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import Button from '../../components/Button';

const width = Dimensions.get("screen").width;

function Category() {
  const route = useRoute();
  const navigation = useNavigation();
  

  const { expenses } = route.params;


  const [categories, setCategories] = useState([...new Set(expenses.map(item => item.category))]); 


  const handleCategoryPress = (category) => {
    navigation.navigate("CategoryExpenses", { category, expenses });
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 36, textAlign: "center" }}>Category Screen</Text>


      <FlatList
        data={categories}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleCategoryPress(item)}>
            <View style={{ padding: 15, backgroundColor: "seagreen", marginVertical: 5, borderRadius: 5 }}>
              <Text style={{ color: "white", fontSize: 18 }}>{item}</Text>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item, index) => index.toString()}
        ListEmptyComponent={<Text style={{ marginTop: 10, marginLeft: 20 }}>No categories found.</Text>}
      />


        <View style={{alignSelf:"center"}}>
          <Button title="Go Back" onPress={() => navigation.goBack()} />
        </View>
    </View>
  );
}

export default Category;