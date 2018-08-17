import React from 'react';

export const BookTableDumb = ({ books, onBookSelect }) => (
    <table className="table table-hover">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Author</th>
                <th scope="col">Title</th>
            </tr>
        </thead>
        <tbody>
            {books.map((book, i) => (
                <tr key={book.id} onClick={() => onBookSelect(i)}>
                    <th scope="row">{i + 1}</th>
                    <td>{book.author}</td>
                    <td> {book.title}</td>
                </tr>
            ))}
            <tr></tr>
        </tbody>
    </table>
)