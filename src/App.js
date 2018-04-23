import React, { Component } from 'react';
import { BookOverview } from './components/BookOverview';
import './App.css';


const loadBooks = () => fetch('/api/books').then(res => res.json());

export class App extends Component {
  
  state = {
    books: null,
  };

  componentDidMount() {
    this._booksRequest = loadBooks().then(books => {
        this._booksRequest = null;
        this.setState({ books });
      }
    );
  }

  componentWillUnmount() {
    this._booksRequest && this._booksRequest.cancel();
  }

  render() {
    if (this.state.books === null) {
      return (
        <span>Loading books data... </span>  
      );
    } else {
      return (
        <div className="book-app">
          <BookOverview books={this.state.books}/>
        </div>
      );
    }
  }
}