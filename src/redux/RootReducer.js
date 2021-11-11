import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import sidebarReducer from "./Sidebar/SidebarReducer";
// import customerReducer from './Customer/CustomerReducer';

const persisConfig = {
  key: "root",
  storage,
  whitelist: ["sidebar"],
};

const appReducer = combineReducers({
  sidebar: sidebarReducer,
  // cusotmer: customerReducer,
});

const rootReducer = (state, action) => {
  // if (action.type === 'SIGN_OUT_SUCCESS') {
  //   storage.removeItem('persist:root');
  //   return appReducer(undefined, action);
  // }
  return appReducer(state, action);
};

export default persistReducer(persisConfig, rootReducer);
