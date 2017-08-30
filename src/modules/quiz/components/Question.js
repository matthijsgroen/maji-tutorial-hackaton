import { h, Component } from "preact";
import styles from "./Question.scss";
import Timebar from "./Timebar";

const initialState = {
  visibleAnswers: 1,
  active: false,
  timeOut: false
};

class Question extends Component {
  constructor() {
    super();
    this.state = { ...initialState };
  }

  resetQuestion() {
    this.interval = setInterval(() => {
      this.setState({ visibleAnswers: this.state.visibleAnswers + 1 });
      if (this.state.visibleAnswers > this.props.children.length) {
        clearInterval(this.interval);
        this.setState({ active: true });
      }
    }, 200);
  }

  componentDidMount() {
    this.resetQuestion();
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.question !== this.props.question) {
      this.setState(initialState);
      this.resetQuestion();
    }
  }

  render({ question, children, time }, { visibleAnswers, active, timeOut }) {
    const onTimeOut = () => {
      this.setState({ timeOut: true });
    };

    return (
      <main class={styles.main}>
        <div class={styles.question}>
          {question}
        </div>
        <Timebar {...{ time, active, onTimeOut }} />
        <form class={styles.answers}>
          {!timeOut &&
            children.map((child, index) => {
              if (index >= visibleAnswers)
                return <div class={styles.placeholder} />;
              return child;
            })}
          {timeOut && <div>Time{"'"}s up!</div>}
        </form>
      </main>
    );
  }
}

export default Question;
