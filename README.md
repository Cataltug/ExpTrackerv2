# Expense Tracker App
- This is a simple Expense Tracker app built with React Native, where users can add, view, and delete their expenses. 
- The app organizes expenses into categories and offers navigation between different screens using React Navigation. 
- The user can navigate between the Home screen, Add Expense screen, Category screen, and Expense Detail screen.

## Features
### Home Screen
- Displays a list of expenses with details like title, amount, date, and category.
- Allows users to delete an expense.
- Provides a button to navigate to the Add Expense screen.

### Add Expense Screen
- Provides input fields for the user to enter the expense's title, amount, date, and category.
- Adds the entered expense to the home screen when confirmed.

### Category Screen
- Displays a list of available categories (such as Food, Entertainment, etc.).
- Allows users to view expenses categorized by their selection.
- Each category shows the total amount spent in that category.

### Expense Detail Screen
- Displays detailed information about a selected expense.
- Allows users to delete the expense.

## Usage
### HomeScreen
- This screen lists all expenses that have been added.
- Each expense displays the following details:
- Expense Title
- Amount
- Date
- Category
- The screen also provides two buttons:
- Add Expense: Takes the user to the Add Expense screen.
- Categories: Navigates to the Category screen.

### AddExpenseScreen
- This screen allows the user to add a new expense.
- Users must enter the following details:
- Title: The name of the expense.
- Amount: The amount spent.
- Date: The date of the expense.
- Category: The category to which the expense belongs.
- When all fields are filled in and confirmed, the expense is added to the list in the Home screen.

### CategoryScreen
- Displays a list of expense categories, such as Food, Entertainment, etc.
- The user can tap on a category to view all expenses that belong to that category.
- It also shows the total amount spent in each category.

### ExpenseDetailScreen
- Displays detailed information about a single expense (Title, Amount, Date, and Category).
- Provides a button to delete the expense from the list.

### Additional Features
- Expense Deletion: Each expense item has a delete button, which allows users to remove the expense from the list.
- Dynamic Expense Calculation: For each category, the total amount spent is calculated and displayed.
- Responsive Design: The app is designed to work on both Android and iOS with a responsive layout using React Native's Flexbox system.

## Technologies Used
- React Native: For building the mobile app.
- React Navigation: To handle navigation between screens.
- React Hooks (useState, useEffect): For state management and lifecycle methods.
- React Native Safe Area Context: To handle the safe area for devices with notches or edge-to-edge screens.

## Installation Instructions
- To run the app locally, follow these steps:

- Clone the repository:
- git clone https://github.com/Cataltug/ExpTrackerv2

- Navigate to the project folder:
- cd ExpenseTrackerApp

- Install the dependencies:
- npm install


- Run the app on an emulator:
- For Android:
- npx react-native run-android

- For iOS:
- npx react-native run-ios