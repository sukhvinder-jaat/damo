import React, { Component } from 'react';

class DigitalWatch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date(),
    };
  }

  componentDidMount() {
    this.intervalID = setInterval(this.updateTime, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  updateTime = () => {
    this.setState({
      time: new Date(),
    });
  };

  formatTime = (date) => {
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  };

  render() {
    const { time } = this.state;
    const formattedTime = this.formatTime(time);

    return (
      <div>
        <h1>Digital Watch</h1>
        <p>{formattedTime}</p>
      </div>
    );
  }
}

export default DigitalWatch;
