import React, { Component } from "react";
import { connect } from "react-redux";

import publishTweet from "../actions";

class ComposeTweetModal extends Component {
  render() {
    return <div />;
  }
}

const mapDispatchToProps = dispatch => ({
  publishTweet: tweet => dispatch(publishTweet(tweet))
});

export default connect(
  null,
  mapDispatchToProps
)(ComposeTweetModal);
