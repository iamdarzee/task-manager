<template>
  <div id="app" class="bg-black min-h-screen flex flex-col items-center text-cyan-300">
    <!-- Header with navigation -->
    <header class="bg-teal-900 text-white py-4 w-full flex justify-center items-center shadow-md">
      <h1 class="text-3xl font-black pl-8 text-center underline">Z Task Manager</h1>
    </header>
    <!-- Main content area with routes -->
    <main class="mx-auto p-6 bg-gray-700 rounded shadow-lg mt-6 w-full sm:w-2/3 lg:w-3/4 text-center font-bold text-2xl">
      <router-view />
    </main>
    <!-- Explanation Section -->
    <section class="mx-auto p-4 bg-gray-800 rounded shadow-md mt-6 w-full sm:w-2/3 lg:w-3/4 text-center text-lg text-rose-500 font-mono">
      <h2 class="text-xl font-semibold mb-2 underline text-orange-500">How Z Task Manager Works</h2>
      <p class="mb-2">
        The Z Task Manager allows you to efficiently manage your tasks by adding task names, along with their respective
        start and end times. Once you enter this information, the application automatically calculates the duration of
        each task, making it easy to track how much time you need for your activities.
      </p>
      <p class="mb-2">
        All tasks are stored locally, ensuring that they persist even after you refresh the page. To optimize
        performance and keep your task list manageable, it's important to delete completed tasks regularly. This frees
        up space for new tasks and helps maintain an organized workspace.
      </p>
      <p>
        Start managing your tasks effectively today!
      </p>
    </section>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style scoped>
/* Additional styles for specific elements can be added here */
</style>
