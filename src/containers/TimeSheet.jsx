import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo, finishTodo, delTodo } from '../actions/actions';
import Input from '../components/Input';
import Table from '../components/Table';

class TimeSheet extends Component {
  addTodoBtn() {
    const value = document.querySelector('.add-input').value;
    value !== '' && this.props.addTodo(value);
  }

  render() {
    return (
      <div className='timesheet'>
        <h1>List</h1>
        <Input addFn={() => { this.addTodoBtn() }} />
        <Table
          data={this.props.todoList}
          finishTodo={this.props.finishTodo}
          delTodo={this.props.delTodo}
        />
      </div>
    );
  }
}

const mapStateToProps = store => ({
  todoList: store.Todo.list,
})

const mapDispatchToProps = {
  addTodo,
  finishTodo,
  delTodo,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TimeSheet);

