import React, { Component, PropTypes } from 'react'

class Timer extends Component {
  render() {
    const { resetTimer, time, completed } = this.props

    return (
      <div>
        <button onClick={resetTimer}>Reset Timer</button>{' '}
        Seconds remaining: {time}
      </div>
    )
  }
}

Timer.propTypes = {
  time: PropTypes.number.isRequired,
  resetTimer: PropTypes.func.isRequired
}

export default Timer
