import React from  'react';

export const InputTodo = (props) => {
    const { todoText, onChange, onClick, disabled} = props;

    return (
        <div className="inputarea">
        <input disabled={disabled} placeholder="TODOを入力" value={todoText} onChange={onChange}></input>
      <button disabled={disabled} onClick={onClick}>追加</button></div>
    )
}