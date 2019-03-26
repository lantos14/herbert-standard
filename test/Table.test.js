import Table from '../src/components/Table';
import React from 'react';
import { shallow } from 'enzyme';

const delFn = jest.fn();
const finishFn = jest.fn();
const testData = [
  { name: 'testing', finished: false },
  { name: 'testing again', finished: false },
]

describe('Table', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<Table
      data={testData}
      finishTodo={finishFn}
      delTodo={delFn}
      />);
      
    expect(wrapper).toMatchSnapshot;
  });
});


