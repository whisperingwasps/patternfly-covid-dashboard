import React, { Component } from 'react';
import { Alert, Button } from '@patternfly/react-core';
import { css } from '@patternfly/react-styles';
import styles from './app.styles';
import './app.css';
import '@patternfly/react-core/dist/styles/base.css';

export default class App extends Component {
  state = {
    isShowing: true
  };
  dismissNotification = () => {
    this.setState({ isShowing: false });
  };
  render() {
    const { isShowing } = this.state;
    return (
      <div className="app-container">
        {isShowing && (
          <div className="notification-container">
            <Alert
              className={css(styles.notification)}
              variant="success"
              title="Setup Complete"
              action={
                <Button onClick={this.dismissNotification} variant="secondary">
                  Dismiss
                </Button>
              }
            >
              You have successfully launched your patternfly starter project.
            </Alert>
          </div>
        )}
      </div>
    );
  }
}
