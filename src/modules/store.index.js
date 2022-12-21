import Vuex from "vuex";
import auth from "./authentication";
const store = new Vuex.Store({
    modules:{
        auth
    }
});
export default store;