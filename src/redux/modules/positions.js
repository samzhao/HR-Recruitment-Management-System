const mockPositions = [{
  id: 1,
  title: 'Senior Web Developer',
  location: 'Vancouver, BC',
  salary: '$80,000',
  status: 'Fulfilled',
  skillDistributions: [{
    label: 'Javascript',
    value: 6
  }, {
    label: 'HTML',
    value: 1
  }, {
    label: 'CSS',
    value: 2
  }, {
    label: 'Java',
    value: 5
  }, {
    label: 'PHP',
    value: 3
  }]
}, {
  id: 2,
  title: 'Marketing Designer',
  location: 'Richmond, BC',
  salary: '$60,000',
  status: 'In Progress',
  skillDistributions: [{
    label: 'Sales',
    value: 6
  }, {
    label: 'HTML',
    value: 2
  }, {
    label: 'CSS',
    value: 3
  }, {
    label: 'Marketing',
    value: 5
  }, {
    label: 'Psychology',
    value: 5
  }]
}]

// ------------------------------------
// Actions
// ------------------------------------

export function populatePositions() {
  return {
    type: 'POPULATE_POSITIONS'
  }
}

export function newPosition(position) {
  return {
    type: 'NEW_POSITION',
    payload: position
  }
}

export function createPosition(position) {
  return {
    type: 'CREATE_POSITION',
    payload: position
  }
}

export const actions = {
  newPosition,
  createPosition,
  populatePositions
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  'NEW_POSITION': (state, action) => state + action.payload,
  'CREATE_POSITION': (state, action) => state + action.payload,
  'POPULATE_POSITIONS': (state) => state
}

// ------------------------------------
// Reducer
// ------------------------------------
// const initialState = []
const initialState = mockPositions
export default function positionsReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
