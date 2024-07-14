import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "../../store/todoSlice";
import ToDoSearch from "../to-do-search/to-do-search.component";
import ToDoTask from "../to-do-task/to-do-task.component";
import "bootstrap/dist/css/bootstrap.min.css";
const ToDoList = () => {
  const dispatch = useDispatch();
  const add = () => dispatch(addTask(text));
  const [text, setText] = useState();
  const tasks = useSelector(state => state.tasks.tasks);

  return (
    <div className="container text-center my-5 w-50">
      <div className="row my-5 d-flex justify-content-center w-100">
        <ToDoSearch  text={text} addTask={add} setText={setText}/>
        {tasks.map((task) => (
          <ToDoTask key={task.id} task={task}/>
        ))}
      </div>
    </div>
  );
};

export default ToDoList;
