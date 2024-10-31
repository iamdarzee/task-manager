<template>
    <li class="mb-4 last:mb-0 group">
        <div class="flex flex-col md:flex-row gap-4 p-5 bg-gray-400 rounded-xl shadow-md hover:shadow-lg active:scale-[0.98] transform transition-all duration-200 hover:translate-y-[-2px] cursor-pointer border border-gray-100">
            <!-- Task Name/Edit Section -->
            <div class="flex-grow">
                <span v-if="!isEditing" :class="{'line-through text-amber-700': task.completed, 'text-gray-800 font-bold text-lg': !task.completed
                }">{{ task.name }}
                </span>
                <input v-if="isEditing" v-model="editedTaskName" @keyup.enter="saveEdit" @keyup.esc="cancelEdit" class="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200" />
            </div>

            <!-- Time Information -->
            <div class="text-fuchsia-400 space-y-1.5 md:text-right bg-amber-900 p-3 rounded-lg">
                <p class="text-sm">Start: {{ formatTime(task.startTime) }}</p>
                <p class="text-sm">End: {{ formatTime(task.endTime) }}</p>
                <p class="font-medium">Duration: {{ calculateDuration(task.startTime, task.endTime) }}</p>
            </div>

            <!-- Action Buttons -->
            <div class="flex flex-wrap gap-2 mt-4 md:mt-0">
                <button @click="toggleTask" class="flex-1 md:flex-none bg-teal-800 text-white font-semibold py-2 px-4 rounded-md 
                           hover:bg-teal-600 active:bg-teal-700 transition-colors transform active:scale-95
                           shadow-sm hover:shadow">
                    {{ task.completed ? 'Undo' : 'Complete' }}
                </button>
                <button v-if="!isEditing" @click="startEdit" class="flex-1 md:flex-none bg-blue-800 text-white font-semibold py-2 px-4 rounded-md 
                           hover:bg-blue-600 active:bg-blue-700 transition-colors transform active:scale-95
                           shadow-sm hover:shadow">
                    Edit
                </button>
                <button v-else @click="saveEdit" class="flex-1 md:flex-none bg-green-800 text-white font-semibold py-2 px-4 rounded-md 
                           hover:bg-green-600 active:bg-green-700 transition-colors transform active:scale-95
                           shadow-sm hover:shadow">
                    Save
                </button>
                <button @click="removeTask" class="flex-1 md:flex-none bg-red-500 text-white font-semibold py-2 px-4 rounded-md 
                           hover:bg-red-600 active:bg-red-700 transition-colors transform active:scale-95
                           shadow-sm hover:shadow">
                    Delete
                </button>
            </div>
        </div>
    </li>
</template>

<script>
// Script remains the same
export default {
    props: ["task"],
    data() {
        return {
            isEditing: false,
            editedTaskName: this.task.name,
        };
    },
    methods: {
        toggleTask() {
            this.$store.dispatch("toggleTaskStatus", this.task.id);
        },
        removeTask() {
            this.$store.dispatch("removeTask", this.task.id);
        },
        formatTime(time) {
            const options = { hour: '2-digit', minute: '2-digit' };
            return new Date(time).toLocaleTimeString([], options);
        },
        calculateDuration(startTime, endTime) {
            const start = new Date(startTime);
            const end = new Date(endTime);
            const durationInMinutes = Math.round((end - start) / 60000);
            const hours = Math.floor(durationInMinutes / 60);
            const minutes = durationInMinutes % 60;
            return `${hours}h ${minutes}m`;
        },
        startEdit() {
            this.isEditing = true;
            this.editedTaskName = this.task.name;
            this.$nextTick(() => {
                const input = this.$el.querySelector('input');
                if (input) input.focus();
            });
        },
        saveEdit() {
            if (this.editedTaskName.trim() !== "") {
                this.$store.dispatch("editTask", {
                    id: this.task.id,
                    name: this.editedTaskName.trim()
                });
                this.isEditing = false;
            }
        },
        cancelEdit() {
            this.isEditing = false;
            this.editedTaskName = this.task.name;
        },
    },
};
</script>

<style scoped>
.line-through {
    text-decoration: line-through;
}
</style>