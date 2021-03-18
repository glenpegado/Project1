import React from 'react';

const Book = ({image, title, author}) =>{
  const clickHandler = () => alert('Hello');
  const mouseHandler = () => alert('Hello');

  
  return (
      <article className='book'> 
        <img src={image} alt=""/>
        <h1 onMouseOver={(e) => console.log(e.target)}>{title}</h1>
        <h4>{author}</h4>
        <button type='button' onClick={clickHandler}>
          Button
        </button>
      </article>
  )
}

export default Book;