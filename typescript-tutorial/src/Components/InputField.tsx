import React from "react";
import "./Styles.css";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
}

const InputField = ({ todo, setTodo }: Props) => {
  return (
    <form className="input">
      <input
        type="input"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Enter Task"
        className="inputBox"
      ></input>
      <button type="submit" className="inputSubmit">
        Go
      </button>
    </form>
  );
};

export default InputField;
