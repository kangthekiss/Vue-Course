var app = new Vue({
    el: '#app',
    data: {
        like: false,
        colors: ['red', 'green', 'white', 'blue'],
        employees: [
            {
                name: 'Warapol',
                age: 24,
                gender: 'male',
                salary: 20000
            },
            {
                name: 'Sasiwan',
                age: 20,
                gender: 'female',
                salary: 15000
            }
        ]
    },
    methods: {
        handleClick() {
            return !this.like
        }
    }
})