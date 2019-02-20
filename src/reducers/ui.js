import { TOGGLE_MODAL } from "../actions";

const initialState = {
  showModal: true
};

export default (prevState = initialState, action) => {
  switch (action.type) {
    case TOGGLE_MODAL:
      return { ...prevState, showModal: !prevState.showModal };
    default:
      return prevState;
  }
};
