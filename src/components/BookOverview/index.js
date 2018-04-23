import React, { Component } from "react";

import { BookOverviewDumb } from './BookOverviewDumb';

export class BookOverview extends Component {

  constructor(props){
    super(props);
    this.state = {
      books: this.props.books,
      selectedBookIndex: 0,
    };
    this.state.updatedBook = this.state.books[this.state.selectedBookIndex];

    this.onBookSelect = this.onBookSelect.bind(this);
    this.onBookChange = this.onBookChange.bind(this);
    this.onBookSave = this.onBookSave.bind(this);
  }

  onBookSelect(book) {
    this.setState((prevState) => {
      const selectedBookIndex = prevState.books.indexOf(book);
      if (selectedBookIndex !== prevState.selectedBookIndex) {
        return {
          selectedBookIndex,
          updatedBook: book,
        };
      }
    });
  }

  onBookChange(updatedBook) {
    this.setState((prevState) => {
      return {
        updatedBook: {...prevState.updatedBook, ...updatedBook},
      }}
    );
  }

  onBookSave(book) {
    this.setState((prevState, props) => {
      const books = [...prevState.books]; 
      books[prevState.selectedBookIndex] = prevState.updatedBook;
      return {
        books,
      };
    });
  }

  render() {
    return (
      <BookOverviewDumb 
        books={this.state.books}
        currentBook={this.state.updatedBook}
        onBookSelect={this.onBookSelect}
        onBookChange={this.onBookChange}
        onBookSave={this.onBookSave}
      />
    );
  }
}
