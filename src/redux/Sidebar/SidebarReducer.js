import SidebarActionTypes from "./SidebarActionTypes";

const INITIAL_STATE = {
  open: false,
};

const sidebarReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SidebarActionTypes.TOGGLE_DRAWER:
      return {
        ...state,
        open: !state.open,
      };
    default:
      return state;
  }
};

export default sidebarReducer;
