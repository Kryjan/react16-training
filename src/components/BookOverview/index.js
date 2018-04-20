import { connect } from 'react-redux';

import { BookOverviewDumb } from './BookOverviewDumb';
import { selectBook, saveBook } from '../../actions'

const mapStateToProps = state => {
  return {
    books: state.books,
    currentBook: state.currentBook,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onBookSelect: book => {
      dispatch(selectBook(book));
    },
    onBookSave: book => {
      dispatch(saveBook(book));
    },
  };
}

export const BookOverview = connect(
  mapStateToProps,
  mapDispatchToProps
)(BookOverviewDumb)