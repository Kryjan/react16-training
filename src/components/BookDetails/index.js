import { connect } from 'react-redux';

import { BookDetailsDumb } from './BookDetailsDumb';
import { editAuthors, editTitle } from '../../actions'

const mapDispatchToProps = dispatch => {
  return {
    onAuthorsChange: e => {
      const authors = e.target.value;
      dispatch(editAuthors(authors));
    },
    onTitleChange: e => {
      const title = e.target.value;
      dispatch(editTitle(title));
    },
  };
}

export const BookDetails = connect(
  () => ({}),
  mapDispatchToProps
)(BookDetailsDumb)
