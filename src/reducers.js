import { combineReducers } from 'redux';
import * as actions from './actions';

const DEFAULT_STATE = {
  locale: 'ja',
  data: {
    fileDict: {},
  },
  ui: {
    selectedFilename: null,
  },
};

function data(state = DEFAULT_STATE.data, action) {
  switch (action.type) {
    case actions.SET_FILE_DICT:
      return {
        ...state,
        fileDict: action.payload,
      };
    default:
      return state;
  }
}

function ui(state = DEFAULT_STATE.ui, action) {
  switch (action.type) {
    case actions.SELECT_FILE:
      return {
        ...state,
        selectedFilename: action.payload,
      };
    case actions.SET_FILE_DICT:
      return {
        ...state,
        selectedFilename:
          !state.selectedFilename && Object.keys(action.payload).length > 0
            ? action.payload[Object.keys(action.payload)[0]].name
            : state.selectedFilename,
      };
    default:
      return state;
  }
}

function locale(state = DEFAULT_STATE.locale, action) {
  switch (action.type) {
    case actions.SWITCH_LANGUAGE:
      return action.payload.lang;
    default:
      return state;
  }
}

export default combineReducers({
  locale,
  data,
  ui,
});
