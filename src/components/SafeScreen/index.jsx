import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { View } from 'react-native';
import React from 'react';
import { useExpenseContext } from '../../../expenseContext';

function SafeScreen(props) {
  const { top, bottom } = useSafeAreaInsets();
  const { children, applyTopMargin = true } = props;

  const { expenses, addExpense } = useExpenseContext();

  return (
    <View style={{ flex: 1, top: applyTopMargin ? top : 0 }}>
      {children}
    </View>
  );
}

export default SafeScreen;