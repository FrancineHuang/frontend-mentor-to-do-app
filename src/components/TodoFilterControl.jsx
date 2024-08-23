const TodoFilterControl = ({ filterStatus, setFilterStatus }) => {
  const handleClick = (status) => {
      setFilterStatus(status)
  }

  return(
    <div className="control-btn group">
      <button
        className={ filterStatus === "all" ? "btn active" : "btn border-none bg-transparent cursor-pointer focus:outline-none" }
        onClick={() => handleClick("all")}
      >
        All
      </button>
      <button
        className={ filterStatus === "active" ? "btn active bg-check-bg-blue font-bold" : "btn border-none bg-transparent cursor-pointer focus:outline-none" }
        onClick={() => handleClick("active")}
      >
        Active
      </button>
      <button
        className={ filterStatus === "completed" ? "btn active" : "btn border-none bg-transparent cursor-pointer focus:outline-none" }
        onClick={() => handleClick("completed")}
      >
        Completed
      </button>
    </div>
  )
}

export default TodoFilterControl