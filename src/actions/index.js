/* eslint-disable import/prefer-default-export */
export const PUBLISH_TWEET = "PUBLISH_TWEET";
export const UPDATE_DRAFT_TWEET = "UPDATE_DRAFT_TWEET";

export const publishTweet = payload => ({
  type: PUBLISH_TWEET,
  payload
});

export const updateDraftTweet = payload => ({
  type: UPDATE_DRAFT_TWEET,
  payload
});
