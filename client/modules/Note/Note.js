import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Import Style
import styles from './Note.css';

const Note = props =>
  <li className={styles.Note} {...props}>{props.children}</li>;



/*const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};
*/
Note.propTypes = {
  children: PropTypes.any,
};

export default Note;
