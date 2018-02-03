import { createLaneRequest, fetchLanes } from '../Lane/LaneActions';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Lanes from '../Lane/Lanes';
import styles from './Kanban.css';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

const Kanban = (props) => (
  <div className={styles.kanbanContainer}>
    <nav className={styles.mainNav}>
      <button
        className={styles.AddLane}
        onClick={() => props.createLane({
          name: 'New lane',
        })}
        >Nowa tablica</button>
      </nav>
    <Lanes lanes={props.lanes} />
  </div>
);

Kanban.need = [() => { return fetchLanes(); }];

Kanban.propTypes = {
  lanes: PropTypes.array,
  createLane: PropTypes.func,
};

const mapStateToProps = (state) => ({
  lanes: Object.values(state.lanes)
});

const mapDispatchToProps = {
  createLane: createLaneRequest,
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  DragDropContext(HTML5Backend)
)(Kanban);
