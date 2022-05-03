import React from 'react';

class Button extends React.Component {
  constructor(props) {
    super(props);
    console.log('Button constructor');
    this.state = {
      timer: 0,
    };
  }

  componentDidMount() {
    console.log('Button did mount');
    this.interval = setInterval(() => {
      this.setState((prevState) => ({ timer: prevState.timer + 1 }));
    }, 1000);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('Button did update', prevProps, prevState);
  }

  componentWillUnmount() {
    console.log('Button willunmount');
    clearInterval(this.interval);
  }

  render() {
    const { props, state } = this;
    return (
      <button type="button" onClick={props.onClick}>
        {props.title}
        {' '}
        {state.timer}
      </button>
    );
  }
}

export class Counter extends React.Component {
  constructor(props) {
    super(props);
    console.log('Counter constructor');

    this.state = {
      count: 0,
      name: 'Alex',
      showButton: true,
    };
  }

  componentDidMount() {
    console.log('Counter did mount');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('Counter did update', prevProps, prevState);
  }

  componentWillUnmount() {
    console.log('Counter did update');
  }

  updateCount = () => {
    // console.log("before: ", this.state.count);
    this.setState({ name: 'new name' });
    this.setState(
      (prevState) => ({ count: prevState.count + 1 }),
      () => {
        // console.log("after: ", this.state.count);
      },
    );
  };

  toggleButton = () => {
    this.setState((prevState) => ({ showButton: !prevState.showButton }));
  };

  render() {
    console.log('Counter render');
    const { count, name, showButton } = this.state;
    return (
      <div>
        <h3>{count}</h3>
        <h3>{name}</h3>
        <button type="button" onClick={this.toggleButton}>Toggle button</button>
        {showButton && (
          <Button onClick={this.updateCount} title="Click" />
        )}
      </div>
    );
  }
}
