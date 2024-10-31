// src/store/index.js
import { createStore } from "vuex";

const store = createStore({
    state: {
        tasks: JSON.parse(localStorage.getItem("tasks")) || [],
    },
    mutations: {
        ADD_TASK(state, task) {
            state.tasks.push(task);
            this.commit("SAVE_TASKS");
        },
        TOGGLE_TASK_STATUS(state, taskId) {
            const task = state.tasks.find(t => t.id === taskId);
            if (task) {
                task.completed = !task.completed;
                this.commit("SAVE_TASKS");
            }
        },
        REMOVE_TASK(state, taskId) {
            state.tasks = state.tasks.filter(t => t.id !== taskId);
            this.commit("SAVE_TASKS");
        },
        EDIT_TASK(state, { id, name }) {
            const task = state.tasks.find(t => t.id === id);
            if (task) {
                task.name = name;
                this.commit("SAVE_TASKS");
            }
        },
        SAVE_TASKS(state) {
            localStorage.setItem("tasks", JSON.stringify(state.tasks));
        },
    },
    actions: {
        addTask({ commit }, task) {
            commit("ADD_TASK", task);
        },
        toggleTaskStatus({ commit }, taskId) {
            commit("TOGGLE_TASK_STATUS", taskId);
        },
        removeTask({ commit }, taskId) {
            commit("REMOVE_TASK", taskId);
        },
        editTask({ commit }, payload) {
            commit("EDIT_TASK", payload);
        },
    },
    getters: {
        allTasks: (state) => state.tasks,
        tasksByDate: (state) => {
            const groupedTasks = {};
            state.tasks.forEach(task => {
                const date = new Date(task.startTime).toDateString();
                if (!groupedTasks[date]) {
                    groupedTasks[date] = [];
                }
                groupedTasks[date].push(task);
            });
            return groupedTasks;
        },
    },
});

export default store;