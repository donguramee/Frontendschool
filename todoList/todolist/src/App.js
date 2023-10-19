import React, { useState, useEffect } from "react";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const [contactData, setContactData] = useState(""); // 추가: contactData 상태

  const addTodo = () => {
    if (input.trim() === "") return;

    const newTodo = {
      id: new Date().getTime(),
      text: input,
      completed: false,
    };

    setTodos([...todos, newTodo]);
    setInput("");
  };

  const toggleComplete = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  // useEffect를 사용하여 투두 리스트가 변경될 때 로컬 스토리지에 저장
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    // 로컬 스토리지에서 투두 리스트를 불러와 초기화
    const storedTodos = JSON.parse(localStorage.getItem("todos"));
    if (storedTodos) {
      setTodos(storedTodos);
    }
  }, []);

  useEffect(() => {
    // 로컬 스토리지에서 데이터 불러오기
    const contactData = localStorage.contactData;
    if (contactData) {
      setContactData(JSON.parse(contactData));
    }
  }, []); // []로 설정하여 컴포넌트가 마운트될 때 한 번만 실행

  useEffect(() => {
    // 컴포넌트 상태가 변경될 때 로컬 스토리지에 데이터 저장
    localStorage.contactData = JSON.stringify(contactData);
  }, [contactData]);

  return (
    <div>
      <h1>Todo List</h1>
      <div>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="할 일을 입력하세요"
        />
        <button onClick={addTodo}>추가</button>
      </div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleComplete(todo.id)}
            />
            <span
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}
            >
              {todo.text}
            </span>
            <button onClick={() => deleteTodo(todo.id)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
