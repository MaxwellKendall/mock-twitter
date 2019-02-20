/* eslint-disable import/prefer-default-export */
export const PUBLISH_TWEET = "PUBLISH_TWEET";
export const TOGGLE_MODAL = "TOGGLE_MODAL";

export const publishTweet = payload => ({
  type: PUBLISH_TWEET,
  payload
});

export const toggleModal = payload => ({
  type: TOGGLE_MODAL,
  payload
});
