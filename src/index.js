import React from 'react';
import ReactDom from 'react-dom';
import './index.css';

// make this into an array
// loop through the array
// add third book
// add id


const books = [
  {
    id: 1,
    author: 'Jade Leaf Organic Matcha Green Tea Powder - Authentic Japanese Origin - Premium Second Harvest Culinary Grade (1.06 Ounce)',
    image: 'https://m.media-amazon.com/images/I/51L9MGWV0yL._AC_SR500,460_.jpg',
    title: 'Matcha title'
  },
  {
    id: 2,
    author: 'Visit the Sofia + Sam Store',
    image: 'https://images-na.ssl-images-amazon.com/images/I/91pb5oFC8JL._AC_SL1500_.jpg',
    title: 'Sofia + Sam Oversized Memory Foam Lap Desk with Wrist Rest'
  },
  {
    id: 3,
    author: 'Visit the Samsonite Store',
    image: 'https://images-na.ssl-images-amazon.com/images/I/A1MocmxNcvL._AC_SL1500_.jpg',
    title: 'Samsonite Omni PC Hardside Expandable Luggage with Spinner Wheels, Navy, Carry-On 20-Inch'
  }
]
function BookList(){
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book key={book.id} {...book}/>
      })}
    </section>
  )
}

const Book = ({image, title, author}) =>{
  const clickHandler = () => {
    alert('Hello')
  }
  return (
      <article className='book'> 
        <img src={image} alt=""/>
        <h1>{title}</h1>
        <h4>{author}</h4>
        <button type='button' onClick={clickHandler}>
          Glen
        </button>
      </article>
  )
}


ReactDom.render(<BookList/>, document.getElementById('root'))