import { ReducerAction } from '../interfaces';

enum ActionTypes {
  GET_ALL, // 0
  GET_BY_TAG, // 1
  GET_BY_USER // 2
}

const initialState = {
  posts: [],
  tag: null,
  userId: null
};

export default function FeedReducer(state = initialState, action: ReducerAction) {
  switch (action.type) {
    case ActionTypes.GET_ALL: // case 0:
      return {
        ...state,
        posts: action.payload
      };

    default:
      return state;
  }
}
