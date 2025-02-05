
const List = ({todos}) => {
return(
    <ol>
    {todos.map((list,index) => (
      <li key={index} style={{textDecoration: list.isFinished ? "line-through"  : "none"}}>
        {list.title}
      </li>
    ))}
  </ol>
);
};

export default List;