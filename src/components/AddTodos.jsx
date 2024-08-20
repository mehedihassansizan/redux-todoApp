import { useState } from "react";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { addTodo } from "../Features/Todo/todoSlice";

const AddTodos = () => {
  const [inputValue, setInputValue] = useState("");

  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    if (inputValue == '') {
      return;
    }
    e.preventDefault();
    dispatch(addTodo(inputValue));
    Swal.fire({
      title: 'success',
      icon: 'success',
      showConfirmButton: false,
      timer: 900,
    })
    setInputValue("");
  };
  return (
    <form
      className="flex justify-center flex-row mt-8"
      onSubmit={addTodoHandler}
    >
      <input
        type="text"
        placeholder="Type here"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="input input-bordered w-full max-w-xs md:h-[60px]"
      />
      <button className="btn btn-neutral ml-4 md:h-[60px]">Add todo</button>
    </form>
  );
};

export default AddTodos;
