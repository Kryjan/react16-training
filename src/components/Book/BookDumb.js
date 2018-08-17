import React, { Fragment } from "react";
import { FormGroup } from './FormGroup';
import "./Book.css";
import DiscoHoc from "./DiscoHoc";

const DiscoFormGroup = DiscoHoc(FormGroup);

export const BookDumb = ({ book, onAuthorChange, onTitleChange }) => (
    <Fragment>
        <form className="book-form">
            <DiscoFormGroup>
                <label htmlFor="author">Authors:</label>
                <input value={book.author} onChange={onAuthorChange} type="text" className="form-control" id="author"></input>
            </DiscoFormGroup>
            <DiscoFormGroup>
                <label htmlFor="title">Title:</label>
                <input value={book.title} onChange={onTitleChange} type="text" className="form-control" id="title"></input>
            </DiscoFormGroup>
        </form>
        <div className="book-result">
            <p>Current Book:</p>
            <span>
                {JSON.stringify(book)}
            </span>
        </div>
    </Fragment>
);
