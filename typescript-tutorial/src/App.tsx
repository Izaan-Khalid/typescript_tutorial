import React, { useState } from "react";
import InputField from "./Components/InputField";
import "./Styles/App.css";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");

  console.log(todo);

  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <InputField todo={todo} setTodo={setTodo} />
    </div>
  );
};

export default App;
