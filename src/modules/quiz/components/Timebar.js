import { h } from "preact";
import styles from "./Timebar.scss";

const Timebar = ({ time, active }) => {
  let style = `transition-duration:${time}s;`;
  if (active) {
    style += "width:100%";
  }

  return (
    <div class={styles.timebar}>
      <div style={style} />
    </div>
  );
};

export default Timebar;
