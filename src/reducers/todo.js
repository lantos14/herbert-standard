export default function Todo(state = {
  list: [{ name: 'laundry', finished: false }, { name: 'jogging', finished: false }, { name: 'festival', finished: false }],
}, action) {
  switch (action.type) {
    case 'TODO_ADD_REQUESTED': {
      const modList = JSON.parse(JSON.stringify(state.list));
      modList.push({ name: action.payload, finished: false });
      return {
        ...state,
        list: modList,
      };
    }

    default:
      return state;
  }
}
