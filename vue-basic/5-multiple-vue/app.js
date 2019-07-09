var post = new Vue({
    el: '#post',
    data: {
        title: 'Vue.Js Course',
        description: 'Learning basic Vue.Js'
    },
})

var comment = new Vue({
    el: '#comment',
    data: {
        comments: [
            {
                text: 'Good'
            },
            {
                text: '555'
            }
        ]
    }
})

var like = new Vue({
    el: '#like',
    data: {
        like: false
    },
    methods: {
        handleLike() {
            return this.like = !this.like
        }
    }
})