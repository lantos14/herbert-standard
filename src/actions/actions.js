export default function testAction(text) {
  return {
    type: 'TEST_REQUESTED',
    payload: text,
  };
}
