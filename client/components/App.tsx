import { IDispatch } from 'redux';
import { connect } from 'react-redux';
import * as React from 'react';

interface AppProps {
  dispatch: IDispatch;
}

class App extends React.Component<AppProps, void> {
  render() {
    const { dispatch } = this.props;

    return (
      <div className="app">
        {'awesome typescript app goes here'}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  
});

export default connect(mapStateToProps)(App);
