import { deleteLane, updateLane, editLane } from './LaneActions';
import { createNoteRequest } from '../Note/NoteActions';
import { connect } from 'react-redux';
import Lane from './Lane';

const mapStateToProps = (state, ownProps) => {
  return {
    laneNotes: ownProps.lane.notes.map(noteId => state.notes.find(note => note.id === noteId)),
  };
};

const mapDispatchToProps = {
  editLane,
  deleteLane,
  updateLane,
  addNote: createNoteRequest,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Lane);
