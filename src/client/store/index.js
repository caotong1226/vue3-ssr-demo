import { createStore } from "vuex";
import home from "./modules/home";
export default () => {
  return createStore({
    modules: {
      home,
    },
  });
};
