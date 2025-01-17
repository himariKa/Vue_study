// Vueの定数であることを定義する
const { createApp } = Vue;
// App定数を作成する
    const App = createApp({
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
    
    //定数Appのtextを変更する処理
    App.text='good bye';
    //定数Appのcountをインクリメントする処理
    App.increment()
