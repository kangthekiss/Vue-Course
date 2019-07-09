Vue.component('btn-add', {
    data() {
        return {
            count: 0
        }
    },
    template: '<button v-on:click="count++">Click {{count}}</button>'
})

Vue.component('vue-component', {
    template: '<h1>Vue-Component</h1>'
})

new Vue({
    el: '#app'
})