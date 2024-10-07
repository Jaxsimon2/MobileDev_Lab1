import React from 'react';
import {View} from 'react-native';
import ToDoForm from './ToDoForm';
import ToDoList from './ToDoList';


export default function App() {
  return (
    <View>
      <ToDoList/>
      <ToDoForm/>
    </View>
  );
};
