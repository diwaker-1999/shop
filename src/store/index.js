import { createStore } from "vuex";

import shopModule from "./modules/shop/index";
import authModule from "./modules/auth";
import cartModule from "./cart";

const store = createStore({

    modules: {
        auth: authModule,
        shop: shopModule,
        cart: cartModule,

    },
});

export default store;

