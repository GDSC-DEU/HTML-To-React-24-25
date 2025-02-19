export default function List({
  todoArray,
  todoStyle,
  deleteTodo,
  setCheckbox,
}) {
  return (
    <div className='list'>
      {todoArray.map(({ id, title, createdAt, isFinished }) => {
        return (
          <div className='list__todo' style={todoStyle} key={id}>
            <h3 style={isFinished ? { textDecoration: 'line-through' } : null}>
              {title}
            </h3>
            <p>
              {`${createdAt}`}
              <input
                type='checkbox'
                checked={isFinished}
                onChange={() => {
                  setCheckbox(id);
                }}
              />
            </p>
            <p>{isFinished ? <small>완료</small> : ''}</p>
            <button
              onClick={() => {
                deleteTodo(id);
              }}
            >
              삭제
            </button>
          </div>
        );
      })}
    </div>
  );
}
