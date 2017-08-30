import { h, Component } from "preact";
import styles from "./Timebar.scss";

class Timebar extends Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.active != this.props.active && nextProps.active) {
      setTimeout(() => {
        nextProps.onTimeOut();
      }, nextProps.time * 1000);
    }
  }

  render({ time, active }) {
    let style = `transition-duration:${time}s;`;
    if (active) {
      style += "width:100%";
    }

    return (
      <div class={styles.timebar}>
        <div style={style} />
      </div>
    );
  }
}

export default Timebar;
