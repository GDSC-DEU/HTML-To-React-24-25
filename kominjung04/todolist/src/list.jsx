
const List = ({todos, onDelete}) => {
return(
    <ol>
    {todos.map((list) => (
      <li key={list.id} style={{textDecoration: list.isFinished ? "line-through"  : "none"}}>
        {list.title}
        <button onClick={() => onDelete(list.id)}>삭제</button>
      </li>
    ))}
  </ol>
);
};

export default List;