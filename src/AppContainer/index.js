import React, { Component  } from 'react';
import { Router } from 'react-native-router-flux';
import PropTypes from 'prop-types';

import scenes from '../routes/scenes'
import { Provider } from 'react-redux';

export default class AppContainer extends Component{
  render() {
    return (
      <Provider store={this.props.store} >
        <Router scenes={scenes} />
      </Provider>
    )
  }

}
AppContainer.propTypes = {
  store: PropTypes.object.isRequired
}
