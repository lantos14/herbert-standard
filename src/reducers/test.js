/* eslint-disable no-param-reassign */
export default function Test(state = {
  testSuccess: 'click on the button',
}, action) {
  switch (action.type) {
  case 'TEST_REQUESTED': {
    return {
      ...state,
      testSuccess: action.payload,
    };
  }

  default:
    return state;
  }
}
