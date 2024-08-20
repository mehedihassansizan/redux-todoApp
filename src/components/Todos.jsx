import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo, updateTodo } from "../Features/Todo/todoSlice";

const Todos = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [newText, setNewText] = useState("");

  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const removeTodoHandler = (id) => {
    dispatch(removeTodo(id));
  };

  const handleEditClick = (todo) => {
    setIsEditing(true);
    setEditId(todo.id);
    setNewText(todo.text);
  };

  const handleUpdate = () => {
    dispatch(updateTodo({ id: editId, newText }));
    setIsEditing(false);
    setEditId(null);
    setNewText("");
  };

  const inputStyle = {
    border: isEditing ? '2px solid blue' : 'none',
    padding: '5px',
    marginRight: '10px'
};


  return (
    <>
      <div className="flex justify-center items-center flex-col mt-6">
        <h1 className="text-2xl font-bold">Todos</h1>
        {todos.map((todo) => (
          <div key={todo.id} className="modal-box flex items-center">
            {isEditing && editId === todo.id ? (
              <>
                <input
                  type="text"
                  value={newText}
                  onChange={(e) => setNewText(e.target.value)}
                  className="font-bold text-lg flex-grow"
                  placeholder={
                    isEditing ? "Edit your todo" : "Enter a new todo"
                  }
                  style={inputStyle}
                />
                <button
                  className="btn btn-neutral ml-4 md:h-[60px]"
                  onClick={handleUpdate}
                >
                  Save
                </button>
                <button
                  className="btn btn-neutral ml-4 md:h-[60px]"
                  onClick={() => setIsEditing(false)}
                >
                  Cancel
                </button>
              </>
            ) : (
              <>
                <span className="flex-grow">{todo.text}</span>
                <button
                  onClick={() => removeTodoHandler(todo.id)}
                  className="btn btn-neutral ml-4 md:h-[60px]"
                >
                  Remove
                </button>
                <button
                  onClick={() => handleEditClick(todo)}
                  className="btn btn-neutral ml-4 md:h-[60px]"
                >
                  Edit
                </button>
              </>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default Todos;
