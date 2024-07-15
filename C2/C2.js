const { createApp } = Vue;

    createApp({
        data() {
            return {
                text: 'hello Vue.js',
                count:0
            };
        },
        methods:{
            increment(){
                this.count++
            }
        }

    }).mount('#app');

    createApp.text='good bye';
