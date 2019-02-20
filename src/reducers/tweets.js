import { PUBLISH_TWEET, UPDATE_DRAFT_TWEET } from "../actions";

const initialState = {
  publishedTweets: [
    {
      created_at: "Thu Apr 06 15:24:15 +0000 2017",
      id: 850006245121695744,
      id_str: "850006245121695744",
      text:
        "Today we’re sharing our vision for the future of the Twitter API platform!nhttps://t.co/XweGngmxlP",
      user: {},
      entities: {}
    }
  ],
  newTweetCount: 0,
  draftTweet: ""
};

export default (prevState = initialState, action) => {
  switch (action.type) {
    case PUBLISH_TWEET:
      return {
        ...prevState,
        publishedTweets: [...prevState.publishedTweets, action.payload]
      };
    case UPDATE_DRAFT_TWEET:
      return {
        ...prevState,
        draftTweet: action.payload
      };
    default:
      return prevState;
  }
};
