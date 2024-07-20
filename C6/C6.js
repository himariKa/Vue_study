//色を変化させるアプリを作成する

// Vueの定数であることを定義する
const { createApp } = Vue;

const App = createApp({
    // el:'#app',
    data(){
        return{
            range:10,
            red:0,
            blue:0,
            green:0
        };
    },
    computed:{
        bindStyle(){
            return  {
                width: `${this.range}px`,
                height: `${this.range}px`,
                background: `rgb(${this.red}, ${this.green}, ${this.blue})`
            };
        }
    }
});

const App2 = createApp({
    data(){
        return{
            isActive:false
        };
    },
    methods:{
        toggleButton(){
            this.isActive = !this.isActive
        }
    }
    
});

App.mount('#app');
App2.mount('#app2');