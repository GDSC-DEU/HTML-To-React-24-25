export default function List({todoArray,todoStyle}) {
    return (
      <div className='list' >
        {
          todoArray.map(({id,title,createdAt,isFinished})=>{
            return (
              <div className="list__todo" style={todoStyle} key={id}>
                <h3 style={isFinished ? {textDecoration :'line-through'} : null}>{title}</h3>
                <p>{`${createdAt.getFullYear()}-${createdAt.getMonth()+1}-${createdAt.getDate()} ${createdAt.getHours()}:${createdAt.getMinutes()}`}</p>  
                {isFinished ? <small>완료</small> : ''}
              </div>
            );
          })
        }  
      </div>
    );
}