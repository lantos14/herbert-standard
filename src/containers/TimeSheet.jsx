import React, { Component } from 'react';
import { connect } from 'react-redux';
import Input from '../components/Input';
import Table from '../components/Table';

class TimeSheet extends Component {

  componentDidMount() {

  }
  render() {
    return (
      <div>
        <h1>List</h1>
        <Input />
        <Table data={this.props.todoList}/>
      </div>
    );
  }
}

const mapStateToProps = store => ({
  todoList: store.Todo.list,
})

const mapDispatchToProps = {
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TimeSheet);

