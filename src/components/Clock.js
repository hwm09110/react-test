import React from "react";

const myStyle = {
  fontSize: "26px",
  color: "#ff0000"
};
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    };
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.tick()
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  tick() {
    this.setState({
      date: new Date()
    })
  }
  
  render() {
    return (
      <h1 style={myStyle}>
        现在时间：
        { this.state.date.toLocaleTimeString() }
      </h1>
    );
  }
}

export default Clock;
