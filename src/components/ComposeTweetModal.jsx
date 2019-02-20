import React, { Component } from "react";
import { connect } from "react-redux";
import Modal from "react-modal";

import { publishTweet, toggleModal, updateDraftTweet } from "../actions";

class ComposeTweetModal extends Component {
  updateDraftTweet = e => {
    this.props.updateDraftTweet(e.target.value);
  };

  publishTweet = () => {
    this.props.publishTweet({ text: this.props.draftTweet });
  };

  render() {
    return (
      <Modal
        isOpen={this.props.showModal}
        onRequestClose={() => this.props.setModal(false)}
      >
        <div className="compose-tweet-modal">
          <h1 className="compose-tweet-modal__header">Compose your tweet!</h1>
          <input
            type="text"
            value={this.props.draftTweet}
            onChange={this.updateDraftTweet}
          />
          <button onClick={this.publishTweet}>Tweet</button>
        </div>
      </Modal>
    );
  }
}

const mapStateToProps = state => ({
  draftTweet: state.tweets.draftTweet
});

const mapDispatchToProps = dispatch => ({
  publishTweet: tweet => dispatch(publishTweet(tweet)),
  updateDraftTweet: tweet => dispatch(updateDraftTweet(tweet))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ComposeTweetModal);
