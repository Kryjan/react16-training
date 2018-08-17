import React, { Component } from "react";
import { BookDumb } from "./BookDumb";

const updateBook = (props) => (bookPartial) => ({ ...props.book, ...bookPartial });

export class Book extends Component {

    constructor(props) {
        super(props);
        this.onTitleChange = this.onTitleChange.bind(this);
        this.onAuthorChange = this.onAuthorChange.bind(this);
        ////////////////////
        this.myUpdateBook = updateBook(this.props);
    }

    onTitleChange(event) {
        const title = event.target.value;
        ////////////////////
        const newBook = this.myUpdateBook({ title });
        this.props.onBookChange && this.props.onBookChange(newBook);
    }

    onAuthorChange(event) {
        const author = event.target.value;
        ////////////////////
        const newBook = this.myUpdateBook({ author });
        this.props.onBookChange && this.props.onBookChange(newBook);
    }

    render() {
        return <BookDumb
            onAuthorChange={this.onAuthorChange}
            onTitleChange={this.onTitleChange}
            {...this.props}
        />
    }
}