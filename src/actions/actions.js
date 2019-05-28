export function addTodo(name) {
  return {
    type: 'TODO_ADD_REQUESTED',
    payload: name,
  };
}

export function finishTodo(name) {
  return {
    type: 'TODO_FINISHED_REQUESTED',
    payload: name,
  };
}

export function delTodo(name) {
  return {
    type: 'TODO_DELETE_REQUESTED',
    payload: name,
  };
}
