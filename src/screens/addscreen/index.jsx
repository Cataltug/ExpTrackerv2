import { View, Text, Dimensions, Modal, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import InputField from '../../components/TextInput';
import { useNavigation, StackActions } from '@react-navigation/native'
import components from '../../components';
import Button from '../../components/Button';
import { useExpenseContext } from '../../../expenseContext';


const { SafeScreen } = components;
const width = Dimensions.get("screen").width;

const DEFAULT_EXP_OBJECT = {
  title: '',
  amount: '',
  date: '',
  category: '',
  created: null,
};

function AddScreen() {
  const [expense, setExpense] = useState(DEFAULT_EXP_OBJECT);
  const [modalVisible, setModalVisible] = useState(false); 
  const { categories, addExpense } = useExpenseContext();  
  const navigation = useNavigation();

  const handleChangeText = (text, field) => {
    setExpense((prevExpense) => ({
      ...prevExpense,
      [field]: text,
    }));
  };

  const onConfirm = () => {
    if (!expense.title || !expense.amount || !expense.date || !expense.category) {
      alert("Please fill all fields before submitting.");
      return;
    }
    expense.created = Date.now();
    addExpense(expense);
    navigation.navigate("Home");
  };

  return (
    <SafeScreen>
      <View style={{ flex: 1 }}>
        <Text style={{ fontSize: 28, marginTop: 10, marginLeft: 10, color: "#2c3e50" }}>Expense Details</Text>
        <Text style={{ fontSize: 18, marginTop: 10, marginLeft: 10, color: "#2c3e50" }}>Please fill all fields before submitting</Text>

       
        <InputField
          title="Expense"
          placeholder="Enter expense..."
          onChangeText={handleChangeText}
          field="title"
        />
        <InputField
          title="Amount"
          placeholder="Enter amount..."
          onChangeText={handleChangeText}
          field="amount"
        />
        <InputField
          title="Date"
          placeholder="Enter date..."
          onChangeText={handleChangeText}
          field="date"
        />

        <Text style={{ fontSize: 18, color: "#2c3e50", marginTop: 15 }}>Category</Text>
        <TouchableOpacity
          onPress={() => setModalVisible(true)}
          style={styles.selectCategoryButton}
        >
          <Text style={styles.selectCategoryText}>
            {expense.category || "Select Category"}
          </Text>
        </TouchableOpacity>

      
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={{ fontSize: 20, marginBottom: 10 }}>Select Category</Text>
              {categories.map((category, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => {
                    handleChangeText(category, "category");
                    setModalVisible(false);
                  }}
                  style={styles.categoryOption}
                >
                  <Text style={{ fontSize: 18 }}>{category}</Text>
                </TouchableOpacity>
              ))}
              <Button title="Cancel" onPress={() => setModalVisible(false)} />
            </View>
          </View>
        </Modal>

        <View style={{ flex: 1, justifyContent: "flex-end", marginBottom: 50 }}>
          <View style={{ marginHorizontal: 25, borderRadius: 8, width: width * 0.65, alignSelf: "center" }}>
            <Button title="Submit" onPress={onConfirm} />
          </View>
        </View>
      </View>
    </SafeScreen>
  );
}

const styles = StyleSheet.create({
  selectCategoryButton: {
    height: 50,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgray',
    marginTop: 15,
  },
  selectCategoryText: {
    fontSize: 18,
    color: "#2c3e50",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)", // Arka planı karartıyoruz
  },
  modalContent: {
    width: width * 0.8,
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  categoryOption: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    width: "100%",
  },
});

export default AddScreen;