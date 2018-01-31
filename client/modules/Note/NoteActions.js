import callApi from '../../util/apiCaller';

// Export Constants
export const CREATE_NOTE = 'CREATE_NOTE';
export const CREATE_NOTES = 'CREATE_NOTES';
export const UPDATE_NOTE = 'UPDATE_NOTE';
export const EDIT_NOTE = 'EDIT_NOTE';
export const DELETE_NOTE = 'DELETE_NOTE';

// Export Actions
export function createNote(note, laneId) {
  return {
    type: CREATE_NOTE,
    laneId,
    note,
    editing: false
  };
}

export function createNoteRequest(note, laneId) {
  return (dispatch) => {
    return callApi('notes', 'post', { note, laneId }).then(noteResp => {
      dispatch(createNote(noteResp, laneId));
    });
  };
}

export function createNotes(notesData) {
  return {
    type: CREATE_NOTES,
    notes: notesData,
  };
}

export function updateNote(note) {
  return {
    type: UPDATE_NOTE,
    note,
  };
}

export function updateNoteRequest(note, laneId) {
  return (dispatch) => {
    return callApi(`notes/${note.id}`, 'put', { note, laneId }).then(noteResp => {
      dispatch(updateNote(note, laneId));
    });
  };
}

export function editNote(noteId, laneId) {
  return {
    type: EDIT_NOTE,
    noteId,
    laneId,
  }
}

export function deleteNote(noteId, laneId) {
  return {
    type: DELETE_NOTE,
    noteId,
    laneId,
  };
}

export function deleteNoteRequest(note, laneId) {
  return (dispatch) => {
    return callApi(`lanes/${laneId}/notes/${note.id}`, 'delete', { note, laneId }).then(noteResp => {
      dispatch(deleteNote(note.id, laneId));
    });
  };
}
