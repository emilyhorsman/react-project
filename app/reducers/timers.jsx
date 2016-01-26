const initialState = [
  { time: 60, id: 1 },
  { time: 10, id: 2 },
  { time: 30, id: 3 }
]

const timers = (state = initialState, action) => {
  switch (action.type) {
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
