import React, { Component } from 'react';

interface StopwatchState {
  isRunning: boolean;
  startTime: number;
  laps: number[];
}

class Stopwatch extends Component<{}, StopwatchState> {
  private timerID: NodeJS.Timeout | null = null;

  constructor(props: {}) {
    super(props);
    this.state = {
      isRunning: false,
      startTime: 0,
      laps: [],
    };
  }

  componentDidMount() {
    const lapsData = localStorage.getItem('laps');
    if (lapsData) {
      this.setState({ laps: JSON.parse(lapsData) });
    }
  }

  componentDidUpdate(prevProps: {}, prevState: StopwatchState) {
    const { laps } = this.state;
    if (laps !== prevState.laps) {
      localStorage.setItem('laps', JSON.stringify(laps));
    }
  }

  componentWillUnmount() {
    if (this.timerID) {
      clearInterval(this.timerID);
    }
  }

  handleStartStop = () => {
    this.setState((prevState) => ({
      isRunning: !prevState.isRunning,
    }), () => {
      if (this.state.isRunning) {
        this.timerID = setInterval(() => {
          this.setState((prevState) => ({
            startTime: prevState.startTime + 100,
          }));
        }, 100);
      } else {
        if (this.timerID) {
          clearInterval(this.timerID);
        }
      }
    });
  };

  handleReset = () => {
    this.setState({
      startTime: 0,
      laps: [],
      isRunning: false,
    });
    localStorage.removeItem('laps');
    if (this.timerID) {
      clearInterval(this.timerID);
    }
  };

  handleLap = () => {
    this.setState((prevState) => ({
      laps: [...prevState.laps, prevState.startTime],
    }), () => {
      localStorage.setItem('laps', JSON.stringify(this.state.laps));
    });
  };

  handleDelete = (index: number) => {
    const { laps } = this.state;
    const updatedLaps = [...laps];
    updatedLaps.splice(index, 1);
    this.setState({
      laps: updatedLaps,
    }, () => {
      localStorage.setItem('laps', JSON.stringify(this.state.laps));
    });
  };

  formatTime = (time: number): string => {
    const minutes = Math.floor(time / 60000);
    const seconds = Math.floor((time % 60000) / 1000);
    const milliseconds = Math.floor((time % 1000) / 10);
    return `${minutes.toString().padStart(2, '0')}:${seconds
      .toString()
      .padStart(2, '0')}.${milliseconds.toString().padStart(2, '0')}`;
  };

  render() {
    const { isRunning, startTime, laps } = this.state;

    return (
      <div>
        <div>{this.formatTime(startTime)}</div>
        <button onClick={this.handleStartStop}>{isRunning ? 'Stop' : 'Start'}</button>
        <button onClick={this.handleReset}>Reset</button>
        <button onClick={this.handleLap}>Lap</button>
        <Laps laps={laps} onDelete={this.handleDelete} formatTime={this.formatTime} />
      </div>
    );
  }
}

interface LapsProps {
  laps: number[];
  onDelete: (index: number) => void;
  formatTime: (time: number) => string;
}

const Laps: React.FC<LapsProps> = ({ laps, onDelete, formatTime }) => (
  <div>
    <h2>Laps</h2>
    <ul>
      {laps.map((lap, index) => (
        <li key={index}>
          {typeof lap === 'number' && isFinite(lap) ? (
            <span>{formatTime(lap)}</span>
          ) : (
            <span>Invalid Lap Time</span>
          )}
          <button onClick={() => onDelete(index)}>Delete</button>
        </li>
      ))}
    </ul>
  </div>
);

export default Stopwatch;
