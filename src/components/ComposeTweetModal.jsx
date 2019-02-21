import React, { Component } from "react";
import { connect } from "react-redux";
import Modal from "react-modal";
import cx from "classnames";

import { setNewTweet, updateDraftTweet } from "../actions";

class ComposeTweetModal extends Component {
  updateDraftTweet = e => {
    this.props.updateDraftTweet(e.target.value);
  };

  setNewTweet = () => {
    this.props.setNewTweet(this.props.draftTweet);
    this.props.setModal(false);
  };

  render() {
    const isDisabled = this.props.draftTweet.length === 0;
    return (
      <Modal
        isOpen={this.props.showModal}
        shouldCloseOnEsc
        className="compose-tweet-modal__container"
        shouldCloseOnOverlayClick
        onRequestClose={() => this.props.setModal(false)}
      >
        <h1 className="compose-tweet-modal__header">Compose new tweet</h1>
        <div className="compose-tweet-modal__body">
          <textarea
            type="text"
            maxlength="220"
            value={this.props.draftTweet}
            onChange={this.updateDraftTweet}
          />
          <button
            disabled={isDisabled}
            onClick={this.setNewTweet}
            className={cx({ disabled: isDisabled })}
          >
            Tweet
          </button>
        </div>
      </Modal>
    );
  }
}

const mapStateToProps = state => ({
  draftTweet: state.tweets.draftTweet
});

const mapDispatchToProps = dispatch => ({
  setNewTweet: tweet => dispatch(setNewTweet(tweet)),
  updateDraftTweet: tweet => dispatch(updateDraftTweet(tweet))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ComposeTweetModal);
