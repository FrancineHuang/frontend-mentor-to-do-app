import { useState } from "react"
import CheckedIcon from "../images/icon-check.svg"

const generateId = (array) => {
  const ids = array.map((item) => item.id)
  return Math.max(...ids) + 1
}

const TodoForm = ({todos, setTodos}) => {
  const [todoInput, setTodoInput] = useState("")
  const [themeLight, setThemeLight] = useState(true)

  const handleChange = (e) => {
    setTodoInput(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if(todoInput) {
      const newTodo = {
        id: generateId(todos),
        content: todoInput.trim(),
        completed: false,
      }

      setTodos([newTodo, ...todos])
      setTodoInput("")
    }

  }


  return (
    <div className="form-control bg-white dark:very-dark-desaturated-blue w-full h-102 flex justify-stretch items-center p-38 gap-38 rounded-16 mb-38">
      <div className="checkbox-border-wrap p-1.6 bg-very-light-grayish-blue dark:bg-very-dark-desaturated-blue rounded-full hover:bg-gradient-to-br from-check-bg-blue to-check-bg-purple">
        <span className={`flex w-38 h-38 rounded-full justify-center items-center cursor-pointer ${themeLight ? 'bg-white' : 'bg-very-dark-desaturated-blue'}`}></span>
      </div>

      <form className="w-full" onSubmit={handleSubmit}>
        <label className="hidden" htmlFor="todoInput">Add New Todo</label>
        <input 
          type="text"
          name="todo-input"
          className={`text-29 border-none focus:outline-none w-full ${themeLight ? 'bg-white' : 'bg-very-dark-desaturated-blue'}`}
          id="todo-input"
          placeholder="Create a new todo..."
          value={todoInput}
          onChange={handleChange}
        />
        <button className="hidden" id="submitNewTodo" type="submit">
          Add
        </button>
      </form>
    </div>
  )
}

export default TodoForm