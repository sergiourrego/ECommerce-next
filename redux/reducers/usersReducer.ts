import { AnyAction } from 'redux';

import { USER_LIST_FAILER, USER_LIST_SUCCESS, USER_LIST_LOADING, USER_POST_LOADING, USER_POST_SUCCESS,USER_POST_FAILER,USER_POST_REST } from '../../constants/ActionTypes';

const initialState = {
  list: {},
  listIsLoading: false,
  listIsSuccess: false,
  listIsError: false,
  listMessage: '',

  postUserIsPending: false,
  postUserIsSuccess: false,
  postUserIsError: false,
  postUserMessage: '',
};

export default function actionReducer(state = initialState, action: AnyAction) {
  switch (action.type) {
    case USER_LIST_LOADING:
      return {
        ...state,
        listIsLoading: true,
        listIsSuccess: false,
        listIsError: false,
        listMessage: 'PENDING',
      };
    case USER_LIST_SUCCESS:
      return {
        ...state,
        list: action.payload || {},
        listIsLoading: false,
        listIsSuccess: true,
        listIsError: false,
        listMessage: action.payload?.message || 'Success',
      };
    case USER_LIST_FAILER:
      return {
        ...state,
        list: {},
        listIsLoading: false,
        listIsSuccess: false,
        listIsError: true,
        listMessage: action.payload?.message || action.payload?.error || 'Error',
      };

    case USER_POST_LOADING:
      return {
        ...state,
        postUserIsPending: true,
        postUserIsSuccess: false,
        postUserIsError: false,
        postUserMessage: 'PENDING',
      };
    case USER_POST_SUCCESS:
      return {
        ...state,
        postUserIsPending: false,
        postUserIsSuccess: true,
        postUserIsError: false,
        postUserMessage: action.payload?.message || 'Success',
      };
    case USER_POST_FAILER:
      return {
        ...state,
        postUserIsPending: false,
        postUserIsSuccess: false,
        postUserIsError: true,
        postUserMessage: action.payload?.message || action.payload?.error || 'Error',
      };

    case USER_POST_REST:
      return {
        ...state,
        postUserIsPending: false,
        postUserIsSuccess: false,
        postUserIsError: false,
        postUserMessage: '',
      };

    default:
      return state;
  }
}
