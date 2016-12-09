// ------------------------------------
// Constants
// ------------------------------------
export const CLICK_MERCHANT_CONFIGURE = 'CLICK_MERCHANT_CONFIGURE'
export const SET_MERCHANT_ID = 'SET_MERCHANT_ID'

// ------------------------------------
// Actions
// ------------------------------------

/*  This is a thunk, meaning it is a function that immediately
 returns a function for lazy evaluation. It is incredibly useful for
 creating async actions, especially when combined with redux-thunk!

 NOTE: This is solely for demonstration purposes. In a real application,
 you'd probably want to dispatch an action of COUNTER_DOUBLE and let the
 reducer take care of this logic.  */

export function setMerchantId(value = "") {
  return {
    type: SET_MERCHANT_ID,
    payload: value
  }
}

export function updateMerchantId(e) {
  return setMerchantId(e.target.value)
}

export function clickMerchantConfigure() {
  return {
    type: CLICK_MERCHANT_CONFIGURE
  }
}


export const actions = {
  updateMerchantId,
  clickMerchantConfigure,
  setMerchantId
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [CLICK_MERCHANT_CONFIGURE] : (state, action) => state,
  [SET_MERCHANT_ID] : (state, action) => Object.assign({}, state, {merchantId: action.payload})
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {}
export default function reducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
