# React To-Do List

This project is a To-Do List app made using React Hooks and styled using Bootstrap. 

## Prerequisite

- Node.js
- npm or yarn

## Demo

A fully usable version of the app is hosted [here](https://thecryptochad.github.io/TodoList/).

## Installation

In order to run this app localy you must first clone the repository with:
```sh
git clone https://github.com/TheCryptoChad/TodoList.git
```

Then, navigate inside the directory and install the necessary dependencies with:
```sh
npm install
```

Finally, you can run the app with:
```sh
npm start
```

## Features

The app is capable of receiving user input via a Bootstrap `Form` that takes a `Task`, a `Date`, and a `Time` in order to create the list.

gif

### Button Functionality

- #### Submit

The `Submit` button targets the user input, turns it into an array based on each input's value and sets the State of `todoList` as a new array where the latest task is added at the end.
```js
function addTodo(e) {
  e.preventDefault();
  const data = e.target;
  const newTodo = {
    task: data.task.value,
    date: data.date.value,
    time: data.time.value
  }
  setTodoList(todoList => [...todoList, newTodo]);
}
``` 

gif

- #### Delete

The `Delete` button targets the task corresponding to the particular button clicked and uses the `splice()` method to separate that task form the rest of the array based on its index. Since React State is immutable, we must then update the State of `todoList` by replacing it with a new array that uses the `filter()` method to exclude the task that we wanted to remove.
```js
function deleteTodo(e) {
  todoList.splice(e.target.value, 1);
  setTodoList(todoList =>  todoList.filter((_, i) => i !== e.target.value));
}
``` 

gif

### LocalStorage

The app is capable of storing the `todoList` array between page refreshes and even browser closes thanks to `localStorage`.
```js
const [todoList, setTodoList] = useState(JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || []);
    
useEffect(() => {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todoList));
}, [todoList]);
```
