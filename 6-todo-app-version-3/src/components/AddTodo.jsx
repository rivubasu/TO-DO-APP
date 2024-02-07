import { useRef /*useState*/ } from "react";
import { IoMdAddCircleOutline } from "react-icons/io";
import styles from "./AddTodo.module.css";

function AddTodo({ onNewItem }) {
  // const [todoName, setTodoName] = useState("");
  // const [dueDate, setDueDate] = useState("");
  // const noOfUpdates = useRef(0);
  const todoNameElement = useRef();
  const dueDateElement = useRef();

  // const handleNameChange = (event) => {
  //   setTodoName(event.target.value);
  //   noOfUpdates.current += 1;
  // };

  // const handleDateChange = (event) => {
  //   setDueDate(event.target.value);
  //   console.log(`no. updates are: ${noOfUpdates.current}`);
  // };

  const handleAddButtonClicked = (event) => {
    event.preventDefault();
    const todoName = todoNameElement.current.value;
    const dueDate = dueDateElement.current.value;
    todoNameElement.current.value = "";
    dueDateElement.current.value = "";
    onNewItem(todoName, dueDate);
    // setTodoName("");
    // setDueDate("");
  };

  return (
    <div className="container text-center">
      <form className="row kg-row" onSubmit={handleAddButtonClicked}>
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter Todo here"
            ref={todoNameElement}
            // onChange={handleNameChange}
            className={styles.inp}
            // value={todoName}
          />
        </div>
        <div className="col-4">
          <input
            type="date"
            ref={dueDateElement}
            className={styles.inp}
            // onChange={handleDateChange}
            // value={dueDate}
          />
        </div>
        <div className="col-2">
          <button type="submit" className="btn btn-success kg-button">
            <IoMdAddCircleOutline />
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;
