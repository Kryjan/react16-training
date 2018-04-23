import React, { Component } from "react";

import { BookDetailsDumb } from './BookDetailsDumb';

export class BookDetails extends Component {

  constructor(props){
    super(props);
    this.state = {
      book: {authors: '', title: ''},
    }
    this.onAuthorsChange = this.onAuthorsChange.bind(this);
    this.onTitleChange = this.onTitleChange.bind(this);
  }

  onAuthorsChange(e) {
    const authors = e.target.value;
    this.setState((prevState, props) => ({
      book: {...prevState.book, ...{ authors }},
    }));
  }

  onTitleChange(e) {
    const title = e.target.value;
    this.setState((prevState, props) => ({
      book: {...prevState.book, ...{ title }},
    }));
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