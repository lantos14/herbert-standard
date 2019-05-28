/* eslint-disable no-param-reassign */
export default function todo(state = {
  list: [],
}, action) {
  switch (action.type) {
  case 'TODO_ADD_SUCCEEDED': {
    const modList = JSON.parse(JSON.stringify(state.list));
    modList.push({ name: action.payload, finished: false });
    return {
      ...state,
      list: modList,
    };
  }
  case 'TODO_FINISHED_REQUESTED': {
    const modList = JSON.parse(JSON.stringify(state.list));

    modList.forEach((todo) => {
      if (todo.name === action.payload) {
        todo.finished = true;
      }
    });

    return {
      ...state,
      list: modList,
    };
  }
  case 'TODO_DELETE_REQUESTED': {
    const modList = JSON.parse(JSON.stringify(state.list));

    modList.forEach((todo) => {
      if (todo.name === action.payload) {
        modList.splice(modList.indexOf(todo), 1);
      }
    });

    return {
      ...state,
      list: modList,
    };
  }

  default:
    return state;
  }
}
