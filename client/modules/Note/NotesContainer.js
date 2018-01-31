import { connect } from 'react-redux';
import Notes from './Notes';
import { deleteNote, updateNote, editNote, createNotes, updateNoteRequest, deleteNoteRequest } from '../Note/NoteActions';

const mapDispatchToProps = {
   deleteNote: deleteNoteRequest,
   updateNote: updateNoteRequest,
   createNotes,
   editNote
};

export default connect(
  null,
  mapDispatchToProps
)(Notes);
