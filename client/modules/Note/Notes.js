import React, { PropTypes } from 'react';
import Note from './Note';
import Edit from '../../components/Edit';

const Notes = ({ moveWithinLane, notes, laneId, noteId, editNote, updateNote, deleteNote }) => {
  return (<ul>{notes.map((note) =>
    <Note
      id={noteId}
      key={noteId}
      moveWithinLane={moveWithinLane}
      laneId={laneId}
      editing={note.editing}
    >
      <Edit
        editing={note.editing}
        value={note.task}
        onValueClick={() => editNote(note.id, laneId)}
        onUpdate={(task) => {updateNote({
            ...note,
            task,
            editing: false,
          }, laneId)
        }}
        onDelete={() => deleteNote(note, laneId)}
      />
    </Note>
  )}</ul>);
};



Notes.propTypes = {
  deleteNote: PropTypes.func,
  updateNote: PropTypes.func,
  laneId: PropTypes.string,
  editNote: PropTypes.func,
  notes: PropTypes.array,
};

export default Notes;
