import * as laneActions from './LaneActions';
import { createNoteRequest } from '../Note/NoteActions';
import { connect } from 'react-redux';
import Lane from './Lane';

const mapStateToProps = (state, ownProps) => {
  return {
    laneNotes: ownProps.lane.notes.map(noteId => state.notes[noteId]),
  };
};

const mapDispatchToProps = {
  ...laneActions,
  addNote: createNoteRequest,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Lane);
