import { useEffect, useState } from "react"
import TodoItem from "./TodoItem"
import TodoFilterControl from "./TodoFilterControl"

const TodoList = ({todos, setTodos, filteredTodos, filterStatus, setFilterStatus, themeLight}) => {
		const [leftTodoCount, setLeftTodoCount] = useState(0)

		useEffect(() => {
			const uncompletedTodos = todos.filter((todo) => !todo.completed)
			setLeftTodoCount(uncompletedTodos.length)
		}, [todos])

		const textPlacer = filterStatus === "completed" ? "closed task" : "task"

		const clearCompletedTodos = () => {
			setTodos(todos.filter((todo) => !todo.completed))
			setFilterStatus("all")
		}

		return (
			<>
				<section className={`todo-list-section ${themeLight ? 'bg-white shadow-light-mode' : 'bg-very-dark-desaturated-blue shadow-dark-mode'} rounded-xl mb-77`}>
					{filteredTodos.length < 1 ? (
						<p className={`info-text p-38 border-b border-solid border-[0.1rem] ${themeLight ? 'border-[color:#e4e5f1]' : 'border-[#393a4c]'} `}>There's no {textPlacer}</p>
					) : (
						<ul className="todo-list list-none">
							{filteredTodos.map((todo) => (
								<TodoItem
									todo={todo}
									key={todo.id}
									setTodos={setTodos}
									todos={todos}
									themeLight={themeLight}
								/>
							))}
						</ul>
					)}

					<div className="todo-filter-control flex justify-between items-center p-38 text-18 border-t border-solid border-[0.1rem]">
						<div className="todos-count">{leftTodoCount} items left</div>

						<div className="control-btn group filter-control-for-desktop flex gap-4 xs:hidden sm:hidden md:hidden">
							<TodoFilterControl
								filterStatus={filterStatus}
								setFilterStatus={setFilterStatus}
							/>
						</div>

						<div className="control-btn">
							<button className="btn" onClick={clearCompletedTodos}>
								Clear Completed
							</button>
						</div>
					</div>
				</section>

				{/* For Mobile */}
				<section className={`filter-control-for-mobile 2xl:hidden xl:hidden lg:hidden flex justify-center align-center ${themeLight ? 'bg-white shadow-light-mode' : 'bg-very-dark-desaturated-blue shadow-dark-mode'} rounded-2xl p-4 mb-77`}>
					<div className="control-btn group flex gap-4">
						<TodoFilterControl
							filterStatus={filterStatus}
							setFilterStatus={setFilterStatus}
						/>
					</div>
				</section>
			</>
		)
}

export default TodoList