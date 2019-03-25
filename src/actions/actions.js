export function addTodo(name) {
  return {
    type: 'TODO_ADD_REQUESTED',
    payload: name,
  };
}