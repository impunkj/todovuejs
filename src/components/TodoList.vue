<template>
    <div>
            <div class="for"  v-for="todo in todoList" :key="todo.id">
                    {{  todo.item  }}
            </div>  
    </div>
</template>

<script>
import { useTodoListStore } from '../store/useTodoListStore';
import { storeToRefs } from 'pinia';

export default {
    setup () {
    const store = useTodoListStore()
    const { todoList } = storeToRefs(store)        

        return {todoList}
    }
}
</script>

<style lang="scss" scoped>

</style>