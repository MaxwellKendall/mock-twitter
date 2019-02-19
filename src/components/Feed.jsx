import React, { Component } from "react";
import { connect } from "react-redux";

class Feed extends Component {
  render() {
    console.log(this.props.tweets);
    return <div />;
  }
}

const mapStateToProps = state => ({
  tweets: state.tweets.publishedTweets
});

export default connect(
  mapStateToProps,
  null
)(Feed);
