import React, { useEffect, useState } from 'react';
import { Form, Button, ListGroup } from 'react-bootstrap';

const LOCAL_STORAGE_KEY = "task-list"

function TodoList() {
    const [todoList, setTodoList] = useState(JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || []);
    
    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todoList));
    }, [todoList]);
    
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

    function deleteTodo(e) {
       todoList.splice(e.target.value, 1);
       setTodoList(todoList =>  todoList.filter((_, i) => i !== e.target.value));
    }

    return(
        <>
            <Form onSubmit={addTodo}>
                <Form.Group controlId="formBasicTask">
                    <Form.Label>Task: </Form.Label>
                    <Form.Control type="text" placeholder="Enter a Task" name="task"/>
                </Form.Group>
                <br/>
                <Form.Group controlId="formBasicDate">
                    <Form.Label>Date: </Form.Label>
                    <Form.Control type="date" name="date"/>
                </Form.Group>
                <br/>
                <Form.Group controlId="formBasicTime">
                    <Form.Label>Time: </Form.Label>
                    <Form.Control type="time" name="time"/>
                </Form.Group> 
                <br/>
                <Button type="submit" variant="success">
                    Submit
                </Button>
                <br/>
                <br/>
            </Form>
            <ListGroup>
                {
                    todoList.map((task, index) => {
                        return(
                            <ListGroup.Item key={index} variant="dark">
                                {task.task} on {task.date} at {task.time}
                                <Button type="button" variant="danger" onClick={deleteTodo} value={index}>
                                    Delete
                                </Button>
                            </ListGroup.Item>
                        )
                    })
                } 
            </ListGroup>
        </>
    )
}

export default TodoList;