export default function Todo(state = {
  list: [{name: 'laundry', finished: false}, {name: 'jogging', finished: false}, {name: 'festival', finished: false}],
}, action) {
  switch (action.type) {
    case 'TODO_LIST_REQUESTED': {
      return {
        ...state,
      };
    }

    default:
      return state;
  }
}
