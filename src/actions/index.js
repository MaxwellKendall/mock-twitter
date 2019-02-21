import moment from "moment";

/* eslint-disable import/prefer-default-export */
export const PUBLISH_TWEET = "PUBLISH_TWEET";
export const UPDATE_DRAFT_TWEET = "UPDATE_DRAFT_TWEET";
export const SET_NEW_TWEET = "SET_NEW_TWEET";
export const DISPLAY_ALL_TWEETS = "DISPLAY_ALL_TWEETS";

export const setNewTweet = text => ({
  type: SET_NEW_TWEET,
  payload: {
    text,
    timestamp: moment().format("LLLL"),
    user: "Default User Name"
  }
});

export const updateDraftTweet = payload => ({
  type: UPDATE_DRAFT_TWEET,
  payload
});

export const displayAllTweets = payload => ({
  type: DISPLAY_ALL_TWEETS
});
