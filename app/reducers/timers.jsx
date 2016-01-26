const timers = (state = [], action) => {
  switch (action.type) {
    case 'FETCHING_TIMERS_SUCCESS':
      return action.timers
    case 'TICK':
      return state.map(timer => (
        {
          ...timer,
          time: Math.max(timer.time - 1, 0)
        }
      ))
    default:
      return state
  }
}

export default timers
