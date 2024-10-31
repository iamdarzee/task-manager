<template>
    <div>
        <!-- <h1>Z Task Manager</h1> -->
        <AddTask />
        <TaskList />
    </div>
</template>

<script>
import AddTask from "../components/AddTask.vue";
import TaskList from "../components/TaskList.vue";

export default {
    components: {
        AddTask,
        TaskList,
    },
};
</script>
