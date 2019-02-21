import moment from "moment";

import {
  DISPLAY_ALL_TWEETS,
  UPDATE_DRAFT_TWEET,
  SET_NEW_TWEET
} from "../actions";

const initialState = {
  publishedTweets: [
    {
      timestamp: moment().format("LLLL"),
      text:
        "Check out my portfolio site at maxwellkendall.github.io which has examples of stuff with cleaner css etc... This project is just to show pretty basic grasp on redux and react.",
      user: "Default User Name"
    }
  ],
  newTweets: [],
  draftTweet: ""
};

export default (prevState = initialState, action) => {
  switch (action.type) {
    case DISPLAY_ALL_TWEETS:
      return {
        ...prevState,
        publishedTweets: [...prevState.newTweets, ...prevState.publishedTweets],
        newTweets: []
      };
    case UPDATE_DRAFT_TWEET:
      return {
        ...prevState,
        draftTweet: action.payload
      };
    case SET_NEW_TWEET:
      return {
        ...prevState,
        newTweets: [action.payload, ...prevState.newTweets],
        draftTweet: ""
      };
    default:
      return prevState;
  }
};
