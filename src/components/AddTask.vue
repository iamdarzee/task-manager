<template>
    <div class="max-w-2xl mx-auto p-4">
        <div class="flex flex-col space-y-4">
            <!-- Task Name Input -->
            <div class="relative">
                <input v-model="taskName" placeholder="Add a new task" class="w-full text-xl rounded-lg border-2 border-blue-500 font-semibold font-serif  bg-gray-800 text-white px-4 py-3 transition-all focus:ring-2 focus:ring-blue-400 focus:border-transparent                       placeholder-gray-400" />
            </div>

            <!-- Start Time Input -->
            <div class="relative">
                <label class="absolute -top-2 left-4 px-2 bg-gray-800 text-blue-400 text-sm font-medium">
                    Start Time
                </label>
                <input type="datetime-local" v-model="startTime" class="w-full text-xl rounded-lg border-2 border-blue-500 font-semibold font-serif 
                           bg-gray-800 text-white px-4 py-3 transition-all
                           focus:ring-2 focus:ring-blue-400 focus:border-transparent
                           [color-scheme:dark]" />
            </div>

            <!-- End Time Input -->
            <div class="relative">
                <label class="absolute -top-2 left-4 px-2 bg-gray-800 text-blue-400 text-sm font-medium">
                    End Time
                </label>
                <input type="datetime-local" v-model="endTime" class="w-full text-xl rounded-lg border-2 border-blue-500 font-semibold font-serif 
                           bg-gray-800 text-white px-4 py-3 transition-all
                           focus:ring-2 focus:ring-blue-400 focus:border-transparent
                           [color-scheme:dark]" />
            </div>
        </div>
        <div class="text-center m-4 space-y-3">
            <button @click="addTask"
                class="text-2xl p-2 font-black text-amber-400 ml-2 rounded-md bg-blue-600 hover:bg-blue-500 transition">
                Add Task
            </button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            taskName: "",
            startTime: "",
            endTime: "",
        };
    },
    methods: {
        addTask() {
            if (this.taskName.trim() && this.startTime && this.endTime) { // Ensure input is valid
                const task = {
                    id: Date.now(),
                    name: this.taskName.trim(),
                    completed: false,
                    startTime: this.startTime,
                    endTime: this.endTime,
                };
                this.$store.dispatch("addTask", task);
                this.taskName = "";
                this.startTime = ""; // Clear input after adding
                this.endTime = ""; // Clear input after adding
            } else {
                alert("Please fill in all fields!"); // Alert if any input is empty
            }
        },
    },
};
</script>
