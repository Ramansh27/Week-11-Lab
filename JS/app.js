const todoList = [
    {todo: "clone repo", status: "completed"},
    {todo: "link css and JS", status: "completed"},
    {todo: "write array", status: "started"},
    {todo: "push complete", status: "started"}
]

const completedTodos = []

for (const task of todoList){
    if (task.status === "completed"){
        completedTodos.push(task)
    }
}

for (const todo_val of completedTodos){
    const{ todo } = todo_val
    console.log(todo)
}