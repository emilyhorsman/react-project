import React, { PropTypes } from 'react'

const Timer = ({ time }) => (
  <div>
    Seconds remaining: {time}
  </div>
);

Timer.propTypes = {
  time: PropTypes.number.isRequired
}

export default Timer
