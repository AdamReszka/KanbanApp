import React, { PropTypes } from 'react';
import Lane from './LaneContainer.js';

const Lanes = ({ lanes }) => {
  return (
    <div className="lanes">
      {lanes.map((lane, id) =>
        <Lane className="lane" key={id} lane={lane} />
      )}
    </div>
  );
};

Lanes.propTypes = {
  lanes: PropTypes.array,
}

export default Lanes;
