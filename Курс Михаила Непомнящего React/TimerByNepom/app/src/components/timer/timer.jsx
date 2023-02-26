import React from "react";

export default class Timer extends React.Component {
  state = {
    count: 0,
    isCounting: false,
  };

  componentDidMount() {
    // после первоначальной загрузки страницы берем значение таймера из local
    const userLastCount = localStorage.getItem("timerLastCount");
    if (userLastCount) {
      this.setState({ count: +userLastCount }); // приходит изначально как строка, без преобразования в число, будет делать 1+'1'=11...
    }
  }

  componentDidUpdate() {
    // после обновления компонента сохраняем в local значение таймера
    localStorage.setItem("timerLastCount", this.state.count);
  }

  componentWillUnmount() {
    // если пользователь ушел со страницы и при этом счетчик бы продолжал считать
    clearInterval(this.counterId);
  }

  handleStart = () => {
    this.setState({ isCounting: true });

    this.counterId = setInterval(() => {
      this.setState({ count: this.state.count + 1 });
    }, 1000);
  };

  handleStop = () => {
    this.setState({ isCounting: true });
    clearInterval(this.counterId);
  };

  handleReset = () => {
    this.setState({ isCounting: false, count: 0 });
    clearInterval(this.counterId);
  };

  render() {
    return (
      <div>
        <h1>React Timer</h1>
        <h3>{this.state.count}</h3>
        {!this.state.isCounting ? (
          <button onClick={this.handleStart}>Start</button>
        ) : (
          <button onClick={this.handleStop}>Stop</button>
        )}
        <button onClick={this.handleReset}>Reset</button>
      </div>
    );
  }
}
