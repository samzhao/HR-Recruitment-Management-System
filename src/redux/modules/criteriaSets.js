// ------------------------------------
// Actions
// ------------------------------------

export function addCriteriaSet(payload) {
  return {
    type: 'ADD_CRITERIA_SET',
    payload
  }
}

export function editCriteriaSet(payload) {
  return {
    type: 'EDIT_CRITERIA_SET',
    payload
  }
}

export function removeCriteriaSet(payload) {
  return {
    type: 'REMOVE_CRITERIA_SET',
    payload
  }
}

export const actions = {
  addCriteriaSet,
  editCriteriaSet,
  removeCriteriaSet
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  'ADD_CRITERIA_SET': (state, action) => {
    let clone = _.clone(state)
    clone.push(action.payload)

    return clone
  },

  'EDIT_CRITERIA_SET': (state, action) => {
    let clone = _.clone(state)
    let index = _.findIndex(state, { id: action.payload.id })
    clone[index] = _.merge(state[index], action.payload)

    return clone
  },

  'REMOVE_CRITERIA_SET': (state, action) => {
    let clone = _.clone(state)
    let index = _.findIndex(state, { id: action.payload.id })

    clone.splice(index, 1)

    return clone
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = []
export default function criteriaSetsReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
