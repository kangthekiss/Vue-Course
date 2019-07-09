var app = new Vue({
    el: '#app',
    data: {
        newData: {
            name: '',
            salary: 0
        },
        empGroup: [
            {
                name: 'warapol',
                salary: 10000
            },
            {
                name: 'sasiwan',
                salary: 15000
            }
        ],
        total: 0
    },
    methods: {
        saveData(e) {
            e.preventDefault()
            
            this.empGroup.push({
                name: this.newData.name,
                salary: this.newData.salary
            })

            this.resetData()
        },
        resetData() {
            this.newData.name = ''
            this.newData.salary = 0
        },
        showMessage() {
            alert('completed')
        }
    },
    //เมื่อข้อมูลมีการเปลี่ยนแปลง
    computed: {
        summation() {
            return this.empGroup.reduce((sum, data) => sum + Number(data.salary), 0)
        },
        avg() {
            var total =  this.empGroup.reduce((sum, data) => sum + Number(data.salary), 0)

            return total/this.empGroup.length
        }
    },
    // เมื่อ computed ทำงานเสร็จ
    watch: {
        summation() { // เมื่อ summation ใน computed ทำงานเสร็จ
            this.showMessage()
        }
    },
})