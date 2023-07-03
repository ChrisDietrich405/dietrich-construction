import React from "react";
import { AiOutlineArrowUp } from "react-icons/ai";
import styles from "./styles.module.css";

export default class SmoothScroll extends React.Component {
  state = { shouldScrollToTop: false };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    const pageYOffset = window.pageYOffset;
    if (pageYOffset >= 500) {
      this.setState({ shouldScrollToTop: true });
    } else {
      this.setState({ shouldScrollToTop: false });
    }
  };

  scrollToTop = () => {
    const scrollStep = -window.scrollY / 20;
    const scrollAnimation = () => {
      if (window.scrollY > 0) {
        window.scrollTo(0, window.scrollY + scrollStep);
        requestAnimationFrame(scrollAnimation);
      }
    };
    requestAnimationFrame(scrollAnimation);
  };

  render() {
    return (
      this.state.shouldScrollToTop && (
        <div className={styles.scroll_top} onClick={this.scrollToTop}>
          <AiOutlineArrowUp size={50} />
        </div>
      )
    );
  }
}
