/* eslint-disable import/prefer-default-export */
export const PUBLISH_TWEET = "PUBLISH_TWEET";

export const publishTweet = payload => ({
  type: PUBLISH_TWEET,
  payload
});
