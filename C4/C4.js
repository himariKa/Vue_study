// TODO:条件付きレンダリングを理解する

// Vueの定数であることを定義する
const { createApp } = Vue;

// App定数を作成する
    const App = createApp({
        data() {
            return {
                text: 'hello Vue.js',
                count:0,
                name:'name'
            };
        },
        methods:{
            increment(){
                this.count++
            },
            decrement(){
                this.count--
            },
            changeHoge(){
                this.text='hogehoge';
            }
        },
        computed:{
            isPassA(){
                return this.count >= 10;
            },
            isPassB(){
                return this.count >= 5;
            },
            isInValidName(){
                return this.name.length < 4;
            }
        }

    }).mount('#app');
    
    //定数Appのtextを変更する処理
    App.text='good bye';
    //定数Appのcountをインクリメントする処理
    App.increment()
