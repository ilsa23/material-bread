import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withTheme from '../../Theme/withTheme';
import Paper from '../Paper/Paper';

class List extends Component {
  static propTypes = {
    children: PropTypes.node,
    style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    shadow: PropTypes.number,
  };
  render() {
    const { style, shadow } = this.props;
    return (
      <Paper
        shadow={shadow ? shadow : 0}
        style={[{ backgroundColor: '#fff' }, style]}>
        {this.props.children}
      </Paper>
    );
  }
}

export default withTheme(List);
