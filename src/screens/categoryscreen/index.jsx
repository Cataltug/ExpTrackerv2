import { View, Text, FlatList, TouchableOpacity, Dimensions, ImageBackground, TextInput } from 'react-native';
import React, { useState } from 'react';
import { StackActions, useNavigation, useRoute } from '@react-navigation/native';
import Button from '../../components/Button';
import SafeScreen from '../../components/SafeScreen';
import { useExpenseContext } from '../../../expenseContext';

const width = Dimensions.get("screen").width;

function Category() {
  const navigation = useNavigation();
  const { categories, addCategory } = useExpenseContext();

  const [newCategory, setNewCategory] = useState("");

  const handleAddCategory = () => {
    if (newCategory.trim() !== "") {
      addCategory(newCategory); 
      setNewCategory("");
    }
  };

  const handleCategoryPress = (category) => {
    navigation.navigate("CategoryExpenses", { category });
  };

  return (
    <ImageBackground
      source={require("../../assets/image.jpg")}
      style={{ flex: 1 }}
    >
      <SafeScreen>
        <View style={{ flex: 1, padding: 20 }}>
          <Text style={{ fontSize: 36, textAlign: "center", color:"#2c3e50" }}>Category Screen</Text>

          
          <TextInput
            value={newCategory}
            onChangeText={setNewCategory}
            placeholder="Add new category"
            style={{
              height: 40,
              borderColor: "gray",
              borderWidth: 1,
              marginVertical: 20,
              paddingLeft: 10,
              borderRadius: 5,
            }}
          />

          <Button title="Add Category" onPress={handleAddCategory} />

          
          <FlatList
            data={categories}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => handleCategoryPress(item)}>
                <View style={{ padding: 15, backgroundColor: "lavenderblush", marginVertical: 15, borderRadius: 5, borderWidth: 1 }}>
                  <Text style={{ color: "black", fontSize: 18 }}>{item}</Text>
                </View>
              </TouchableOpacity>
            )}
            keyExtractor={(item, index) => index.toString()}
            ListEmptyComponent={<Text style={{ marginTop: 10, marginLeft: 20, color: "snow" }}>No categories found.</Text>}
          />

          <View style={{ alignSelf: "center", marginBottom: 25 }}>
            <Button title="Go Back" onPress={() => navigation.dispatch(StackActions.popTo("Home"))} />
          </View>
        </View>
      </SafeScreen>
    </ImageBackground>
  );
}

export default Category;