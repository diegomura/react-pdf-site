import React, { Children } from 'react';

class Catch extends React.Component {
  state = {
    error: undefined,
  };

  static getDerivedStateFromError(error) {
    return { error };
  }

  componentDidCatch(error, info) {
    if (errorHandler) {
      errorHandler(error, info);
    }
  }

  render() {
    return this.props.children(this.state.error);
  }
};

export default Catch;
