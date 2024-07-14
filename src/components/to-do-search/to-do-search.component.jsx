import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

const ToDoSearch = ({ text, setText, addTask }) => {

  return (
    <div className="row">
      <p className='text-uppercase fs-1 my-3'>Mobke's to do</p>
      <div className="form-floating col">
        <input
          type="text"
          className=" form-control"
          id="floatingInput"
          placeholder="go gym"
          onChange={(e) => setText(e.target.value)}
          value={text}
        />
        <label className='px-5' htmlFor="floatingInput">Add tasks</label>
      </div>
      <button type="button" className="btn btn-primary col-1" onClick={addTask}>
        Add
      </button>
    </div>
  );
}

export default ToDoSearch;
