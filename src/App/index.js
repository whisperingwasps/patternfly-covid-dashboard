import React, { Component } from 'react';
import { Alert, AlertActionCloseButton, Badge, BackgroundImage, BackgroundImageSrc } from '@patternfly/react-core';
import { Route } from 'react-router';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';
// import { css } from 'astroturf';
// import './app.css';

// const styles = css`
//   .button {
//     color: black;
//     border: 1px solid black;
//     background-color: white;
//   }
// `;

const images = {
  // [BackgroundImageSrc.lg]: '../../assets/pfbg_1200.jpg',
  // [BackgroundImageSrc.sm]: '../../assets/pfbg_768.jpg',
  // [BackgroundImageSrc.sm2x]: '../../assets/pfbg_768@2x.jpg',
  // [BackgroundImageSrc.xs]: '../../assets/pfbg_576.jpg',
  // [BackgroundImageSrc.xs2x]: '../../assets/pfbg_576@2x.jpg',
  // [BackgroundImageSrc.filter]: '../../assets/background-filter.svg#image_overlay',
};

class Home extends Component {
  render() {
    return <h1>hello world</h1>;
  }
}

// More components
class Car extends Component {
  render() {
    return <Badge>70</Badge>;
  }
}

class Data extends Component {
  render() {
    return (
      <div className="notification-container">
        <Alert
          variant="success"
          title="Setup Complete"
          action={<AlertActionCloseButton onClose={this.dismissNotification} />}
        >
          You have successfully launched your patternfly starter project.
        </Alert>

        <BackgroundImage src={images} />
      </div>
    );
  }
}

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
        <Router>
          <NavLink to='/cars' className="pf-c-nav__link">Cars</NavLink>
          <NavLink to='/data' className="pf-c-nav__link">Data</NavLink>
          <NavLink to='/' className="pf-c-nav__link">Home</NavLink>

          <Route path="/" component={Home} />
          <Route path="/cars" component={Car} />
          <Route path="/data" component={Data} />
        </Router>
      </div>
    );
  }
}
