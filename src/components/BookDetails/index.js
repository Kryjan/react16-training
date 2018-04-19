import React, { Component } from "react";

import { BookDetailsDumb } from './BookDetailsDumb';


const changeBook = (self) => (changeObj) => {
  self.setState((prevState, props) => {
    const newBook = {...prevState.book, ...changeObj}; 
    self.props.onBookChange && self.props.onBookChange(newBook);
    return {
      book: newBook,
    };
  });
}

export class BookDetails extends Component {

  constructor(props){
    super(props);
    this.state = {
      book: props.book || {authors: '', title: ''},
    }
    this.onAuthorsChange = this.onAuthorsChange.bind(this);
    this.onTitleChange = this.onTitleChange.bind(this);
    this.changeBook = changeBook(this);
  }

  static getDerivedStateFromProps(nextProps, prevState){
    const { book: nextBook } = nextProps;
    if (prevState.book === nextBook){
      return null;
    }
    return {
      book: nextBook,
    }
  }

  
  onAuthorsChange(e) {
    this.changeBook({authors: e.target.value});
  }

  onTitleChange(e) {
    this.changeBook({title: e.target.value});
  }

  render() {
    return (
      <BookDetailsDumb 
        book={this.state.book} 
        onAuthorsChange={this.onAuthorsChange} 
        onTitleChange={this.onTitleChange} 
      />
    );
  }
}
