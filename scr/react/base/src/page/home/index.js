import React from 'react';
import { bindActionCreators } from 'redux';
import * as actions from './action';
import { connect } from 'react-redux';

class Home extends React.Component {
  getUserName = (e) => {
    this.props.getName('li');
  }
  render() {
    return (
      <div>
        Home页面
        <br />
        <div onClick={(e) => this.getUserName(e)}>点击获取用户名</div>
        <div>222</div>
        <div>{this.props.name}</div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    name: state.home.name
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)