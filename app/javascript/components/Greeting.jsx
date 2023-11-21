import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchRandomGreeting } from '../redux/actions';

const Greeting = ({ randomGreeting, fetchRandomGreeting }) => {
  useEffect(() => {
    fetchRandomGreeting();
  }, [fetchRandomGreeting]);

  return (
    <div>
      <h1>{randomGreeting}</h1>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    randomGreeting: state.randomGreeting,
  };
};

export default connect(mapStateToProps, { fetchRandomGreeting })(Greeting);
