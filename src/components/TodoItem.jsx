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
    <li className={classes}>
      <label htmlFor={`todoCheckbox-${todo.id}`}>Completed Checkbox</label>
      <input 
        id={`todoCheckbox-${todo.id}`}
        type="text" 
        name="completed-checkbox"
        defaultChecked={mutableTodo.completed}
      />
      <div className={`checkbox-border-wrap p-1.6 bg-gradient-to-br hover:from-check-bg-blue hover:to-check-bg-purple  ${themeLight ? 'bg-very-light-grayish-blue ' : 'bg-very-dark-grayish-blue-1'} rounded-full`}>
        <span className={`checkbox flex w-38 h-38 rounded justify-center items-center cursor-pointer ${themeLight ? 'bg-white' : 'bg-very-dark-desaturated-blue'}`} onClick={toggleCompleted}>
          {CheckedIcon}
        </span>
      </div>
      <p>{mutableTodo.content}</p>
    </li>
  )
}

export default TodoItem