<template>
    <div>
            <form @submit.prevent="addItem(todo)">
                    <input v-model="todo" type="text">
                    <button type="submit">Add</button>
            </form>
    </div>
</template>

<script>
import { ref } from "vue"; 
import { useTodoListStore } from "../store/useTodoListStore";   
export default {
    setup () {
        const todo = ref("");
        const store = useTodoListStore()
        function addItem(item){
            console.log('additem');
            if(item.length === 0 ){
                console.log('alert');
                return;
            }
            store.addTodo(item)
            todo.value = '';
        }        
        return {
            todo, addItem, store
        }
    }
}
</script>

<style lang="scss" scoped>

</style>