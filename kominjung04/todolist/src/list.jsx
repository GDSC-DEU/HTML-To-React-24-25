
const List = () => {
    const todo = [
        {title:'과제하기'},
        {title:'토익공부하기'},
        {title:'청소하기'},

    ]

return(
    <ol>
    {todo.map((list, index) => (
      <li key={index}>
        {list.title}
      </li>
    ))}
  </ol>
)
}

export default List;