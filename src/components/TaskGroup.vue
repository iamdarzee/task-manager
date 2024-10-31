<template>
    <div>
        <h2 class="text-2xl font-bold mb-4 underline text-violet-400">Tasks by Date</h2>
        <div v-for="(tasks, date) in groupedTasks" :key="date">
            <h3 class="text-lg font-semibold mt-4">{{ date }}</h3>
            <ul>
                <TaskItem v-for="task in tasks" :key="task.id" :task="task" />
            </ul>
        </div>
    </div>
</template>

<script>
import TaskItem from "./TaskItem.vue";

export default {
    components: { TaskItem },
    computed: {
        groupedTasks() {
            return this.$store.getters.tasksByDate; // Get grouped tasks from Vuex store
        },
    },
};
</script>

<style scoped>
/* Add your styles here */
</style>
