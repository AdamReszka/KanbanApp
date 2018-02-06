import { connect } from 'react-redux';
import Notes from './Notes';
import { deleteNote, updateNote, editNote, createNotes, updateNoteRequest, deleteNoteRequest } from '../Note/NoteActions';
import { moveWithinLane } from '../Lane/LaneActions';

const mapDispatchToProps = {
   deleteNote: deleteNoteRequest,
   updateNote: updateNoteRequest,
   createNotes,
   moveWithinLane,
   editNote,
   onValueClick: editNote
};

export default connect(
  null,
  mapDispatchToProps
)(Notes);
