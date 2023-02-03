import { defineStore } from "pinia";

export const useTodoListStore = defineStore('todoList', {
    state: () => ({
        todoList: [],
        id: 0
    }), 
    actions: {
        addTodo(item){
            console.log('addtodo');
            this.todoList.push({item, id: this.id++, completed:false})
        }
    }
})