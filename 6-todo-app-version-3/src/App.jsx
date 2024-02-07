import { useState } from "react";
import "./App.css";
import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomeMessage";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  // const handleNewItem = (itemName, itemDate) => {
  //   // console.log(`New Item Added:${itemName} Date:${itemDate}`);
  //   const newTodoItems = [...todoItems, { name: itemName, dueDate: itemDate }];
  //   setTodoItems(newTodoItems);
  // };

  // const handleNewItem = (itemName, itemDate) => {
  //   // console.log(`New Item Added:${itemName} Date:${itemDate}`);
  //   setTodoItems((currValue) =>{
  //     const newTodoItems=[
  //     ...currValue,
  //     { name: itemName, dueDate: itemDate },
  //   ]
  // return newTodoItems});
  // };

  const handleNewItem = (itemName, itemDate) => {
    // console.log(`New Item Added:${itemName} Date:${itemDate}`);
    setTodoItems((currValue) => [
      ...currValue,
      { name: itemName, dueDate: itemDate },
    ]);
  };

  const handleDeleteItem = (todoItemName) => {
    // console.log(`${todoItemName} deleted`);
    const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItems(newTodoItems);
  };
  return (
    <center className="todo-container">
      <AppName />
      <AddTodo onNewItem={handleNewItem} />
      {todoItems.length === 0 && <WelcomeMessage></WelcomeMessage>}
      <TodoItems
        todoItems={todoItems}
        onDeleteClick={handleDeleteItem}
      ></TodoItems>
    </center>
  );
}

export default App;
