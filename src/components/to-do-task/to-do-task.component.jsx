import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask, toggleCompleted } from '../../store/todoSlice';
import "bootstrap/dist/css/bootstrap.min.css";

const ToDoTask = ({task}) => {

    const dispatch = useDispatch();

  return (
        <div
          key={task.id}
          className="d-flex row fs-3 text-light justify-content-start p-3 bg-primary my-4 rounded border-bottom"
        >
          <input
            type="checkbox"
            className="col"
            checked={task.completed}
            onChange={() => dispatch(toggleCompleted(task.id))}
          />
          <span className="text-uppercase col">{task.text}</span>
          <span className="col" onClick={() => dispatch(deleteTask(task.id))}>
            &times;
          </span>
        </div>
  );
}

export default ToDoTask;
