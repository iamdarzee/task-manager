// src/router/index.js

import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import TaskDetails from "../views/TaskDetails.vue";

const routes = [
    { path: "/", name: "HomePage", component: HomePage },
    { path: "/task/:id", name: "TaskDetails", component: TaskDetails },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
