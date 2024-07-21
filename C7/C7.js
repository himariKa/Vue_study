//todoアプリを作成する

// Vueの定数であることを定義する
const { createApp } = Vue;

const App = createApp({
    data() {
        return {
            todos: [],
            text: ''
        };
    },
    methods: {
        inputText(e) {
            this.text = e.target.value;
        },
        addTodo() {
            if (!this.text) return;

            const text = this.text;
            const id = Math.ceil(Math.random() * 1000);
            const todo = {
                id,
                text,
                isDone: false
            };
            this.todos.push(todo);
            this.resetText();
        },
        resetText() {
            this.text = "";
        },
        deleteTodo(id) {
            const index = this.getIndexBy(id);
            this.todos.slice(index, 1);
        },
        toggleIsDone(id) {
            const index = this.getIndexBy(id);
            this.todos[index].isDone = !this.todos[index].isDone
        },
        getIndexBy(id) {
            const filterTodo = this.todos.filter(todo => todo.id === id)[0];
            const index = this.todos.indexOf(filterTodo);
            return index;
        }
    },
    computed: {
        doneTodo() {
            return this.todos.filter(todo => todo.isDone === true);
        },
        incompleteTodo() {
            return this.todos.filter(todo => todo.isDone === false);
        }
    }
});

App.mount('#app');