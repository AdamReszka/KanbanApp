import { connect } from 'react-redux';
import Notes from './Notes';
import { deleteNote, updateNote, editNote } from '../Note/NoteActions';

const mapDispatchToProps = {
   deleteNote,
   updateNote,
   editNote
};

export default connect(
  null,
  mapDispatchToProps
)(Notes);
