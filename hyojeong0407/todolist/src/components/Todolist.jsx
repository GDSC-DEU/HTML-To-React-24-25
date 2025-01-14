const TodoList = () => {
    const todos = [
        { title: '리액트 공부하기', date: '2024. 01. 14' },
        { title: '스터디 과제하기', date: '2024. 01. 14' },
        { title: '커밋하기', date: '2024. 01. 14' },
    ]

    return (
        <ol>
            {todos.map((todo, index) => (
                <li key={index}>
                    {todo.title} - {todo.date}
                </li>
            ))}
        </ol>
    )
}

export default TodoList;