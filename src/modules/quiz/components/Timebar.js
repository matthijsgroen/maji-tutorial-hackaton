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
    let style = `transition-duration:${time}s;width:100%`;
    if (!active) {
      style = "transition-duration: 0s";
    }

    return (
      <div class={styles.timebar}>
        <div style={style} />
      </div>
    );
  }
}

export default Timebar;
