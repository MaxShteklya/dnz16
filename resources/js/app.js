import Vue from "vue"
import App from "./components/App"
import router from "./router"

import DefaultLayout from "./layouts/default"
import AdminLayout from "./layouts/admin"
import NoLayout from "./layouts/no-layout"

Vue.component("default-layout", DefaultLayout)
Vue.component("admin-layout", AdminLayout)
Vue.component("no-layout", NoLayout)

require('./bootstrap')

new Vue({
    router,
    ...App
});
