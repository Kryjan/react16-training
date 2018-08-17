import React from 'react';
import { Book } from '../Book';
import { BookTableDumb } from './BookTableDumb'

export const BookOverviewDumb = ({ books, onBookChange, onBookSelect, currentBook }) => (
    <div>
        <BookTableDumb books={books} onBookSelect={onBookSelect}></BookTableDumb>
        <Book book={currentBook} onBookChange={onBookChange}></Book>
    </div>
)