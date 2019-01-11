import { connect } from 'react-redux';
import List from './List';
import { addTodo } from '../actions/index';

const mapStatetoProps = (state) => {
  return {
    items: state.items,
    filter: state.filter
  }
}

const mapDispatchtoProps = (dispatch) => {
  return {
    onAdd: (text) => { dispatch(addTodo(text)); }
  }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(List)