export default function testReducer(state = {
  test: null,
}, action) {
  switch (action.type) {
    case 'TEST_SEQUENCE_REQUESTED': {
      return {
        ...state,
        test: 'success',
      };
    }

    default:
      return state;
  }
}
