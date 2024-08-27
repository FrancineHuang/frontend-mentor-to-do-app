import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import TodoForm from './components/TodoForm.jsx';
import TodoList from './components/TodoList.jsx';
import BgDesktopLight from './images/bg-desktop-light.jpg'
import BgDesktopDark from './images/bg-desktop-dark.jpg'

const data = [
  {id: 1, content: "Complete online JavaScript Course", completed: true},
  {id: 2, content: "Jog around the park 3x", completed: false},
  {id: 3, content: "10 minutes meditation", completed: false},
  {id: 4, content: "Read for 1 hour", completed: false},
  {id: 5, content: "Pick up groceries", completed: false},
  {id: 6, content: "Complete Todo App from Frontendmentor", completed: false},
]

function App() {
  const [themeLight, setThemeLight] = useState(true)
  const [todos, setTodos] = useState(data)
  const [filterStatus, setFilterStatus] = useState("all")
  const [filteredTodos, setFilteredTodos] = useState(todos)

  const themeClass = themeLight? 'bg-very-light-gray' : 'bg-very-dark-blue'
  const bgImage = themeLight? `url(${BgDesktopLight})` : `url(${BgDesktopDark})`

  useEffect(() => {
    const handleFilter = () => {
      switch(filterStatus) {
        case "active":
          return setFilteredTodos(todos.filter((todo) => !todo.completed))

        case "completed":
          return setFilteredTodos(todos.filter((todo) => todo.completed))
        
        default:
          return setFilteredTodos(todos)
      }
    }
    handleFilter()
  }, [todos, filterStatus])

  return (
    <div 
      className={`wrapper ${themeClass} bg-no-repeat bg-top bg-contain pt-80 pb-80`}
      style={{ backgroundImage: bgImage }}
    >
      <div className='max-w-864 mx-auto'>
        <Header themeLight={themeLight} setThemeLight={setThemeLight}/>
        <main>
          <TodoForm
            todos={todos}
            setTodos={setTodos}
            themeLight={themeLight}
          />
          <TodoList
            todos={todos}
            setTodos={setTodos}
            filteredTodos={filteredTodos}
            filterStatus={filterStatus}
            setFilterStatus={setFilterStatus}
            themeLight={themeLight}
          />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
