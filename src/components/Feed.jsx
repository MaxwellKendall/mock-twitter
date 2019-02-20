import React, { Component } from "react";
import { connect } from "react-redux";

import { Tweet } from "./Tweet";

class Feed extends Component {
  render() {
    return (
      <React.Fragment>
        {this.props.newTweets > 0 && <div>Show New Tweets</div>}
        {this.props.tweets.map(tweet => (
          <Tweet {...tweet} />
        ))}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  tweets: state.tweets.publishedTweets,
  newTweets: state.tweets.newTweets
});

export default connect(
  mapStateToProps,
  null
)(Feed);
