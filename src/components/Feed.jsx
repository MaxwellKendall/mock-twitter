import React, { Component } from "react";
import { connect } from "react-redux";

import { displayAllTweets } from "../actions";
import { Tweet } from "./Tweet";

class Feed extends Component {
  render() {
    return (
      <div className="feed">
        {this.props.newTweets.length > 0 && (
          <button onClick={this.props.displayAllTweets}>{`Show New Tweets (${
            this.props.newTweets.length
          })`}</button>
        )}
        {this.props.tweets.map(tweet => (
          <Tweet {...tweet} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  tweets: state.tweets.publishedTweets,
  newTweets: state.tweets.newTweets
});

const mapDispatchToProps = dispatch => ({
  displayAllTweets: () => dispatch(displayAllTweets())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Feed);
