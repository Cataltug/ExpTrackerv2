import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import RootNavigator from './src/navigation'
import { ExpenseProvider } from './expenseContext';



function App() {
  return (
    <ExpenseProvider>
      <SafeAreaProvider>
        <RootNavigator />
      </SafeAreaProvider>
    </ExpenseProvider>
  );
}

export default App;
