import React, { Component, PropTypes } from 'react';
import NotesContainer from '../Note/NotesContainer';
import Edit from '../../components/Edit';

// Import Style
import styles from './Lane.css';

class Lane extends React.Component {
  constructor(props) {
    super(props);

    this.props = props;
  }

  render() {
    const { lane, connectDropTarget, connectlane, laneNotes, updateLane, addNote, deleteLane, editLane } = this.props;
    const laneId = lane.id;

    return connectDropTarget(
      <div className={styles.Lane}>
        <div className={styles.LaneHeader}>
          <Edit
            className={styles.LaneName}
            editing={lane.editing}
            value={lane.name}
            onValueClick={() => editLane(lane.id)}
            onUpdate={name => updateLane({ ...lane, name, editing: false })}
          />
          <div className={styles.LaneControls}>
            <div className={styles.LaneAddNote}>
              <button className={styles.AddNote} onClick={() => addNote({ task: 'New Note' }, laneId)}>Nowa notka</button>
            </div>
            <div className={styles.LaneDelete}>
              <button className={styles.RemoveNote} onClick={() => deleteLane(lane)}>Usuń tablicę</button>
            </div>
          </div>
        </div>
        <NotesContainer
          notes={laneNotes}
          laneId={laneId}
        />
      </div>
    );
  }
}


Lane.propTypes = {
  lane: PropTypes.object,
  laneNotes: PropTypes.array,
  addNote: PropTypes.func,
  updateLane: PropTypes.func,
  deleteLane: PropTypes.func,
  editLane: PropTypes.func,
};

export default Lane;
