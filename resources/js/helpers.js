import Vue from "vue";

Vue.mixin({
    methods: {
        hrefPhoneNumber: str => 'tel:' + str.replace(/[^+\d]+/g, "")
    }
})
