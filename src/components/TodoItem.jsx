import { useState } from "react"
import IconCheck from "../images/icon-check.svg"

const TodoItem = ({ todo, todos, setTodos }) => {
  const[mutableTodo, setMutableTodo] = useState(todo)
  const [themeLight, setThemeLight] = useState(true)

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
        className="w-9"
        id={`todoCheckbox-${todo.id}`}
        type="text" 
        name="completed-checkbox"
        defaultChecked={mutableTodo.completed}
      />
      <div className={`p-1.6 bg-very-light-grayish-blue dark:bg-very-dark-desaturated-blue rounded-full hover:bg-gradient-to-br from-check-bg-blue to-check-bg-purple`}>
        <span className={`checkbox flex w-[24px] h-[24px] rounded-full justify-center items-center cursor-pointer ${themeLight ? 'bg-white' : 'bg-very-dark-desaturated-blue'}`} onClick={toggleCompleted}>
          {CheckedIcon}
        </span>
      </div>
      <p className={`ml-38 text-29 ${mutableTodo.completed ? `text-light-grayish-blue-light-mode ${themeLight ? 'text-light-grayish-blue-light-mode' : 'text-very-dark-grayish-blue-1'} line-through` : ''}`}>{mutableTodo.content}</p>
    </li>
  )
}

export default TodoItem