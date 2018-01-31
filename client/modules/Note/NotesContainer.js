import { connect } from 'react-redux';
import Notes from './Notes';
import { deleteNote, updateNote, editNote, createNotes, updateNoteRequest, deleteNoteRequest, moveWithinLane } from '../Note/NoteActions';

const mapDispatchToProps = {
   deleteNote: deleteNoteRequest,
   updateNote: updateNoteRequest,
   createNotes,
   moveWithinLane,
   onValueClick: editNote
};

export default connect(
  null,
  mapDispatchToProps
)(Notes);
