import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions/actions';
import Input from '../components/Input';
import Table from '../components/Table';

class TimeSheet extends Component {
  addTodoBtn() {
    console.log('addtodo');
    const value = document.querySelector('.add-input').value;
    value !== '' && this.props.addTodo(value);
  }

  render() {
    return (
      <div>
        <h1>List</h1>
        <Input addFn={() => { this.addTodoBtn() }} />
        <Table data={this.props.todoList} />
      </div>
    );
  }
}

const mapStateToProps = store => ({
  todoList: store.Todo.list,
})

const mapDispatchToProps = {
  addTodo
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TimeSheet);

