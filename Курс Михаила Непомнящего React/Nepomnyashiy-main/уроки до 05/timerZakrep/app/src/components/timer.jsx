import React from "react";

class Timer extends React.Component {
  state = {
    count: 0,
    isCounting: false,
  };

  componentDidMount() {
    const userLastCount = localStorage.getItem("savedCount");
    if (userLastCount) {
      this.setState({ count: userLastCount });
    }
  }

  componentDidUpdate() {
    localStorage.setItem("savedCount", this.state.count);
  }

  handleStart = () => {
    this.setState({ isCounting: true }); // {} - потому что объект
    this.countChanging = () => this.setState({ count: this.state.count + 1 });
    this.timerId = setInterval(() => this.countChanging(), 1000);
  };

  handleStop = () => {
    this.setState({ isCounting: false });
    clearInterval(this.timerId);
  };

  handleReset = () => {
    clearInterval(this.timerId);
    this.setState({ count: 0 });
    this.setState({ isCounting: false });
  };

  render() {
    return (
      <>
        <h1>React timer</h1>
        <h3>{this.state.count}</h3>
        {this.state.isCounting === false ? (
          <button className="start-btn" onClick={this.handleStart}>
            start
          </button>
        ) : (
          <button className="stop-btn" onClick={this.handleStop}>
            stop
          </button>
        )}
        <button className="reset-btn" onClick={this.handleReset}>
          reset
        </button>
      </>
    );
  }
}

export default Timer;
