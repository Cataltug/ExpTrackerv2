import { View, Text, Dimensions, ImageBackground } from 'react-native'
import React, { useState } from 'react'
import InputField from '../../components/TextInput';
import { useNavigation, StackActions } from '@react-navigation/native'
import components from '../../components';
import Button from '../../components/Button';


const {SafeScreen} = components;
const width = Dimensions.get("screen").width;


const DEFAULT_EXP_OBJECT = {
  title: '',
  amount: '',
  date: '',
  category: '',
  created: null,
};

function AddScreen(){
    const [expense, setExpense ] = useState(DEFAULT_EXP_OBJECT);
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
        navigation.dispatch(StackActions.popTo("Home", { expense }));
    };

  return (
    <ImageBackground
                    source={require("../../assets/image.jpg")}
                    style={{ flex: 1 }}
    >
        <SafeScreen applyTopMargin={false}>

            <View style={{flex: 1}}>
                <Text style={{fontSize:28, marginTop:10, marginLeft:10, color: "#2c3e50"}}>Expense Details</Text>
                <Text style={{fontSize:18, marginTop:10, marginLeft:10, color: "#2c3e50"}}>Please fill all fields before submitting</Text>
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
                    <InputField
                        title="Category"
                        placeholder="Enter category..."
                        onChangeText={handleChangeText}
                        field="category"
                    />

            <View style={{flex:1, justifyContent: "flex-end", marginBottom: 50}}>
                <View style={{marginHorizontal: 25, borderRadius: 8, width: width * 0.65, alignSelf: "center" }}>
                    <Button title='Submit' onPress={onConfirm} />
                </View>
            </View>

            </View>
        </SafeScreen>
    </ImageBackground>
  )
}

export default AddScreen;