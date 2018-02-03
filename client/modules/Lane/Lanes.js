import React, { PropTypes } from 'react';
import Lane from './LaneContainer.js';

import styles from './Lane.css';

const Lanes = ({ lanes }) => {
  return (
    <div className="lanes">
      {lanes.map((lane, id) =>
        <Lane className="lane styles.Lane" key={id} lane={lane} />
      )}
    </div>
  );
};

Lanes.propTypes = {
  lanes: PropTypes.array,
}

export default Lanes;
