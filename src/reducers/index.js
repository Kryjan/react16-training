import {
  EDIT_TITLE, 
  EDIT_AUTHORS,
  SELECT_BOOK,
  SAVE_BOOK,
} from '../actions';

function selectedBookIndex (
    state = {
      books: [], 
      selectedBookIndex: 0,
    },
    action,
) {
  switch (action.type) {
    case SELECT_BOOK:
      const { book } = action;
      return state.books.indexOf(book);
    default:
      return state.selectedBookIndex;
  }
}


function books (
    state = {
      books: [], 
      selectedBookIndex: 0,
    },
    action,
) {
  switch (action.type) {
    case SAVE_BOOK:
      const { book } = action;
      const newBooks = [...state.books]; 
      newBooks[state.selectedBookIndex] = book;
      return newBooks;
    default:
      return state.books;
  }
}

function currentBook (
    state = {}, 
    action,
) {
  switch (action.type) {
    case SELECT_BOOK:
      const { book } = action;
      return book;
    case EDIT_AUTHORS:
      const { authors } = action;
      return {...state, ...{ authors }};
    case EDIT_TITLE:
      const { title } = action;
      return {...state, ...{ title }};
    default:
      return state;
  }
}

const initialBooks = [
  {id: 1, authors: 'a1', title: 't1'},
  {id: 2, authors: 'a2', title: 't2'},
];

const initialState = {
  books: initialBooks,
  selectedBookIndex: 0,
  currentBook: initialBooks[0],
};

export const booksApp = (state = initialState, action) => {
  return {
    books: books(state, action),
    selectedBookIndex: selectedBookIndex(state, action),
    currentBook: currentBook(state.currentBook, action),
  };
}