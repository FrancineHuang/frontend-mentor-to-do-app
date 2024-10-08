import { useState } from "react"
import IconCheck from "../images/icon-check.svg"

const TodoItem = ({ todo, todos, setTodos, themeLight, setThemeLight }) => {
  const[mutableTodo, setMutableTodo] = useState(todo)

  const classes = mutableTodo.completed ? "completed" : ""
  const CheckedIcon = mutableTodo.completed ? (
    <img src={IconCheck} alt="completed" />
  ) : (
    ""
  )

  const toggleCompleted = () => {
    setMutableTodo({ ...mutableTodo, completed: !mutableTodo.completed })

    const updatedTodos = todos.map((item) => 
      item.id === todo.id ? {...item, completed: !item.completed} : item
    )

    setTodos(updatedTodos)
  }


  return(
    <li className={`flex flex-row items-center h-24 border-b border-solid border-[1.6px] ${themeLight ? 'border-very-light-grayish-blue' : 'border-very-dark-grayish-blue-1'} ${classes}`}>
      <label className="hidden" htmlFor={`todoCheckbox-${todo.id}`}>Completed Checkbox</label>  
      <input 
        className={`hidden`}
        id={`todoCheckbox-${todo.id}`}
        type="text" 
        name="completed-checkbox"
        defaultChecked={mutableTodo.completed}
      />
      <div className="pr-9"></div>
      <div className={`p-1.6 bg-very-light-grayish-blue rounded-full hover:bg-gradient-to-br from-check-bg-blue to-check-bg-purple`}>
        <span className={`checkbox flex w-[24px] h-[24px] rounded-full justify-center items-center cursor-pointer ${themeLight ? 'bg-white' : 'bg-very-dark-desaturated-blue'}`} onClick={toggleCompleted}>
          {CheckedIcon}
        </span>
      </div>
      <p className={`ml-38 text-29 ${mutableTodo.completed ? 'line-through' : ''} ${mutableTodo.completed ? (themeLight ? 'text-light-grayish-blue-light-mode' : 'text-dark-grayish-blue') : (themeLight ? 'text-very-dark-grayish-blue-light-mode' : 'text-light-grayish-blue-dark-mode')}`}>{mutableTodo.content}</p>
    </li>
  )
}

export default TodoItem