const React = require('react');
const ReactDOM = require('react-dom');

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    const { liked } = this.state;
    if (liked) {
      return 'You liked this.';
    }

    return (
      <button type="button" onClick={() => this.setState({ liked: true })}>
        Like
      </button>
    );
  }
}

const domContainer = document.querySelector('#webrtc-component-container');
ReactDOM.render(<LikeButton />, domContainer);
