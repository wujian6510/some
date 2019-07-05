import {
  LAYOUT_TOGGLE_COLLAPSED,
  LAYOUT_PAGE_PUSH,
  LAYOUT_OPEN_MENU,
} from '../actions/types';

const initialState = {
  collapsed: false,
  opened: ['menu-1'],
  siderSelected: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LAYOUT_TOGGLE_COLLAPSED:
      return {
        ...state,
        collapsed: !state.collapsed,
        opened: state.collapsed ? ['menu-1'] : [],
      };
    case LAYOUT_PAGE_PUSH:
      return {
        ...state,
        siderSelected: action.path,
      };
    case LAYOUT_OPEN_MENU:
      return {
        ...state,
        opened: action.path,
      };
    default:
      return state;
  }
};
