import React, { Component } from 'react';
import { BookOverview } from './components/BookOverview';
import './App.css';
const books = [
  { id: 1, author: 'David Flanagan', title: 'JS: Definitive Guide' },
  { id: 2, author: 'Douglas Crockford', title: 'JS: The Good Parts' },
]

export class App extends Component {


  render() {
    return (
      <div className="book-app">
        <BookOverview books={books}></BookOverview>
      </div>
    );
  }
}