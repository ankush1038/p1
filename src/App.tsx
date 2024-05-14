import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './Greet'
import GreetClass from './GreetClass'
import TextChange from './TextChange'
import Home from './Components/Home';
import Lifecycle from './Lifecycle';
import CTimer from './Components/CTimer';
import SignIn from './Components/SignIn';
import Stopwatch from './Components/Stopwatch';
import ShoppingCart from './Components/ShoppingCart';
import Dream4 from './Components/Dream4'





import SearchBar from './Components/SearchBar';
import BookList from './Components/BookList';
import booksData from './Components/Books.json';

interface Book {
  title: string;
  author: string;
}

const App: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    setBooks(booksData);
  }, []);

  const handleSearch = (query: string) => {
    if (query.trim() === '') {
      setBooks(booksData);
    } else {
      const filteredBooks = booksData.filter((book) => book.title.toLowerCase().includes(query.toLowerCase()));
      setBooks(filteredBooks);
    }
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <BookList books={books} />
      {/* <Greet myClick ={clickHandler1} value='code' data={10}></Greet>
      <Greet myClick = {clickHandler2} value='Quotient'></Greet>
      <GreetClass /> */}
      {/*<Greet /> */}

      {/* <TextChange /> */}
      {/* <Home /> */}
      {/* <Lifecycle />
       */}
      {/* <CTimer /> */}
      {/* <button onClick={()=>{setSignedIn(!signedIn)}}>{signedIn?'Sign out':'Sign In'}</button>

        <SignIn /> */}
        {/* <Stopwatch /> */}
        {/* <ShoppingCart /> */}
        {/* <Dream4 /> */}
    </div>
  );
};


      

    

export default App;
