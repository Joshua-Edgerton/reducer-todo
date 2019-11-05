import React from 'react'

const TodoList = ({ state, dispatch }) => {
  return (
    <div>
      <h1>{console.log(state)}</h1>
      {state.todo.map(item => (
        <div>
        <input type="checkbox" className="demo"/>
        <label className="demo" className="swing-in-top-fwd" for="demo"key={item.id}>{item.title}</label>
        </div>
      ))}
    </div>
  );
}

export default TodoList;

// <input type="checkbox" className="demo"/>
// <label for="demo"key={item.id}>{item.title}</label>