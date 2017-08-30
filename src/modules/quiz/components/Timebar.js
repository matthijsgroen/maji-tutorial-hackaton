import { h, Component } from "preact";
import styles from "./Timebar.scss";

class Timebar extends Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.active != this.props.active && nextProps.active) {
      this.timer = setTimeout(() => {
        nextProps.onTimeOut();
      }, nextProps.time * 1000);
    }
    if (nextProps.active != this.props.active && !nextProps.active) {
      clearTimeout(this.timer);
    }
  }

  render({ time, active }) {
    let classes = styles.timebar;
    let style = `transition-duration: ${time}s;animation-duration: ${time}s`;

    if (!active) {
      style = "transition-duration: 0s;animation-duration: 0s";
    } else {
      classes += " " + styles.running;
    }

    return (
      <div class={classes}>
        <div style={style} />
      </div>
    );
  }
}

export default Timebar;
