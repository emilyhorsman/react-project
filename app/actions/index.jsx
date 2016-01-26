const api_url = 'https://rawgit.com/emilyhorsman/fc167009bb30f63f56ee/raw/afd8a1ed2d12ddffcf3728fcc18b2cef8aac211c/timers.json'

let lastTimerId = 0

function receiveTimers(json) {
  return {
    type: 'FETCHING_TIMERS_SUCCESS',
    timers: json.data.map(timer => ({
      time: timer.attributes.time,
      id: lastTimerId++
    })),
    receivedAt: Date.now()
  }
}

export function fetchTimers(dispatch) {
  dispatch({
    type: 'FETCHING_TIMERS'
  })

  return fetch(api_url)
    .then(response => response.json())
    .then(json => {
      dispatch(receiveTimers(json))
    })
}

export function tick() {
  return {
    type: 'TICK'
  }
}
