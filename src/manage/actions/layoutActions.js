import {
  LAYOUT_TOGGLE_COLLAPSED,
  LAYOUT_PAGE_PUSH,
  LAYOUT_OPEN_MENU,
} from './types';

const layoutActions = dispatch => ({
  toggleCollapsed: () => {
    dispatch({
      type: LAYOUT_TOGGLE_COLLAPSED,
    });
  },
  pagePush: (value) => {
    dispatch(
      {
        type: LAYOUT_PAGE_PUSH,
        path: value,
      },
    );
  },
  openMenu: (value) => {
    dispatch(
      {
        type: LAYOUT_OPEN_MENU,
        path: value,
      },
    );
  },
});

export default layoutActions;
