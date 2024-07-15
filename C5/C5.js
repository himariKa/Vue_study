// TODO:リストレンダリングを理解する

// Vueの定数であることを定義する
const { createApp } = Vue;

// App定数を作成する
    const App = createApp({
        data() {
            return {
                items:[
                    {id:1,label:"けんと"},
                    {id:2,label:"けんしろう"},
                    {id:3,label:"けんたろう"}
                ]
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
            },
            isInValidEmail(){
                const regex = new RegExp(/^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}\.[A-Za-z0-9]{1,}$/);
                return !regex.test(this.email);
            },
            isInValidTel(){
                const tel = this.tel;
                const isErr = tel.length < 8 || isNaN(Number(tel));
                return isErr;
            }
        }

    }).mount('#app');
    
    //定数Appのtextを変更する処理
    App.text='good bye';
    //定数Appのcountをインクリメントする処理
    App.increment()
