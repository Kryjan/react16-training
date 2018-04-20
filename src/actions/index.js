/*
 * action types
 */
export const EDIT_TITLE = 'EDIT_TITLE';
export const EDIT_AUTHORS = 'EDIT_AUTHORS';
export const SELECT_BOOK = 'SELECT_BOOK';
export const SAVE_BOOK = 'SAVE_BOOK';


/*
 * action creators
 */
export function editTitle(title) {
  return { type: EDIT_TITLE, title }
}

export function editAuthors(authors) {
  return { type: EDIT_AUTHORS, authors }
}

export function selectBook(book) {
  return { type: SELECT_BOOK, book }
}

export function saveBook(book) {
  return { type: SAVE_BOOK, book }
}
