import { h, Component } from "preact";
import styles from "./Question.scss";
import Timebar from "./Timebar";

class Question extends Component {
  constructor() {
    super();
    this.state = {
      visibleAnswers: 1,
      active: false
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({ visibleAnswers: this.state.visibleAnswers + 1 });
      if (this.state.visibleAnswers > this.props.children.length) {
        clearInterval(this.interval);
        this.setState({ active: true });
      }
    }, 200);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render({ question, children }, { visibleAnswers, active }) {
    return (
      <main class={styles.main}>
        <div class={styles.question}>
          {question}
        </div>
        <Timebar time={30} active={active} />
        <form class={styles.answers}>
          {children.map((child, index) => {
            if (index >= visibleAnswers)
              return <div class={styles.placeholder} />;
            return child;
          })}
        </form>
      </main>
    );
  }
}

export default Question;
