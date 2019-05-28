/* eslint-disable no-shadow */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addTodo, finishTodo, delTodo } from '../actions/actions';
import Input from './TodoSheet/components/Input';
import Table from './TodoSheet/components/Table';

class TodoSheet extends Component {
  addTodoBtn() {
    const { value } = document.querySelector('.add-input');
    const { addTodo } = this.props;
    // eslint-disable-next-line no-unused-expressions
    value !== '' && addTodo(value);
  }

  render() {
    const { todoList, finishTodo, delTodo } = this.props;
    return (
      <div className="todo-sheet">
        <h1>List</h1>
        <Input addFn={() => { this.addTodoBtn(); }} />
        <Table
          data={todoList}
          finishTodo={finishTodo}
          delTodo={delTodo}
        />
      </div>
    );
  }
}

TodoSheet.propTypes = {
  todoList: PropTypes.arrayOf(PropTypes.object).isRequired,
  addTodo: PropTypes.func.isRequired,
  finishTodo: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
};

const mapStateToProps = store => ({
  todoList: store.Todo.list,
});

const mapDispatchToProps = {
  addTodo,
  finishTodo,
  delTodo,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoSheet);
