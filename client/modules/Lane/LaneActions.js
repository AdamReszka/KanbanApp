import callApi from '../../util/apiCaller';
import { lanes } from '../../util/schema';
import { normalize } from 'normalizr';
import { CREATE_NOTES } from '../Note/NoteActions';
import { createNotes } from '../Note/NoteActions';
// Export Constants
export const CREATE_LANES = 'CREATE_LANES';
export const CREATE_LANE = 'CREATE_LANE';
export const UPDATE_LANE = 'UPDATE_LANE';
export const EDIT_LANE = 'EDIT_LANE';
export const DELETE_LANE = 'DELETE_LANE';
// Export Actions
export function createLanes(lanesData) {
  return {
    type: CREATE_LANES,
    lanes: lanesData,
  };
}

export function createLane(lane) {
  return {
    type: CREATE_LANE,
    lane: {
      notes: lane.notes || [],
      ...lane,
    }
  };
}

export function createLaneRequest(lane) {
  return (dispatch) => {
    return callApi('lanes', 'post', lane).then(res => {
      dispatch(createLane(res));
    });
  };
};

export function updateLane(laneId) {
  return {
    type: UPDATE_LANE,
    lane,
  };
}

export function updateLaneRequest(laneId) {
  return (dispatch) => {
    return callApi('lanes/:laneId', 'put', lane).then(res => {
      dispatch(updateLane(res));
    });
  };
};

export function editLane(laneId) {
  return {
    type: EDIT_LANE,
    laneId
  }
}

export function deleteLane(laneId) {
  return {
    type: DELETE_LANE,
    laneId
  };
}

export function deleteLaneRequest(laneId) {
  return (dispatch) => {
    return callApi('lanes/:laneId', 'delete', lane).then(res => {
      dispatch(deleteLane(res));
    });
  };
};

export function fetchLanes() {
  return (dispatch) => {
    return callApi('lanes').then(res => {
      const normalized = normalize(res.lanes, lanes);
      const {lanes: normalizedLanes, notes } = normalized.entities;
      dispatch(createLanes(normalizedLanes));
      dispatch(createNotes(notes));
    });
  };
}
