import { connect } from 'react-redux';
import Notes from './Notes';
import { deleteNote, updateNote, editNote, createNotes } from '../Note/NoteActions';

const mapDispatchToProps = {
   deleteNote,
   updateNote,
   createNotes,
   editNote
};

export default connect(
  null,
  mapDispatchToProps
)(Notes);
