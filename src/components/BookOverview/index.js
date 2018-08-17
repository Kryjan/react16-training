import React, { Component } from "react";

import { BookOverviewDumb } from './BookOverviewDumb';

export class BookOverview extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: props.books,
            selectedBookIndex: 0,
            currentBook: props.books[0]
        };
        this.onBookSelect = this.onBookSelect.bind(this);
        this.onBookChange = this.onBookChange.bind(this);
    }

    onBookSelect(i) {
        console.log(i);
        this.setState((prevState, props) => ({
            currentBook: prevState.books[i],
        }));
    }

    onBookChange(newBook) {
        this.setState((prevState, props) => ({
            currentBook: newBook
        }))
    }

    render() {
        return (
            <BookOverviewDumb
                onBookSelect={this.onBookSelect}
                onBookChange={this.onBookChange}
                {...this.state}
            />
        );
    }
}