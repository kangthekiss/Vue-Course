var app = new Vue({
    el: '#app',
    data: {
        seen: true,
        course: 'Vue Course',
        name: 'Warapol Junmontree',
        age: 24,
        website: 'https://github.com/kangthekiss',
        count: 0
    },
    methods: {
        getName() {
            return this.name
        },
        setNickName(nickname) {
            return nickname
        },
        addAge() {
            return this.age++
        },
        substractAge() {
            return this.age--
        },
        addCount() {
            return this.count++ 
        },
        resetCount() {
            return this.count = 0
        }
    }
})