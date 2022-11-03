<template>
  <div class="overflow-x-auto relative shadow-md mt-6">
    <div class="flex items-center pb-4 mt-1 ml-2 lg:justify-end mr-3 md:justify-center">
      <div class="relative">
        <div class="flex absolute inset-y-0 items-center">
          <font-awesome-icon icon="fa-solid fa-magnifying-glass" class="ml-5 dark:text-gray-400" />
        </div>
        <input
          type="text"
          id="table-search"
          class="block p-2 pl-10 w-80 text-sm rounded-lg border dark:border-light-100 dark:text-white dark:bg-dark-800 dark:hover:bg-dark-300"
          placeholder="Search for items"
        />
      </div>
    </div>
    <table class="w-full text-sm text-left text-gray-400">
      <thead class="text-xs uppercase bg-gray-700 text-gray-400">
        <tr class="text-center ">
          <th scope="col" class="p-4 border dark:border-light-100 dark:text-white dark:bg-dark-800 dark:hover:bg-dark-300">#</th>
          <th scope="col" class="py-3 px-6 border dark:border-light-100 dark:text-white dark:bg-dark-800 dark:hover:bg-dark-300">Product name</th>
          <th scope="col" class="py-3 px-6 border dark:border-light-100 dark:text-white dark:bg-dark-800 dark:hover:bg-dark-300">Color</th>
          <th scope="col" class="py-3 px-6 border dark:border-light-100 dark:text-white dark:bg-dark-800 dark:hover:bg-dark-300">Category</th>
          <th scope="col" class="py-3 px-6 border dark:border-light-100 dark:text-white dark:bg-dark-800 dark:hover:bg-dark-300">Price</th>
          <th scope="col" class="py-3 px-6 border dark:border-light-100 dark:text-white dark:bg-dark-800 dark:hover:bg-dark-300">Action</th>
        </tr>
      </thead>
      <tbody class="text-center">
        <tr class="border-b bg-gray-800 border-gray-700 hover:bg-dark-300">
          <td class="p-4 w-4 border dark:border-light-100 dark:text-white dark:bg-dark-800 dark:hover:bg-dark-300">1</td>
          <th
            scope="row"
            class="py-4 px-6 font-medium whitespace-nowrap text-white dark:border dark:border-light-100 dark:text-white dark:bg-dark-800 dark:hover:bg-dark-300"
          >
            Apple MacBook Pro 17
          </th>
          <td class="py-4 px-6 border dark:border-light-100 dark:text-white dark:bg-dark-800 dark:hover:bg-dark-300">Sliver</td>
          <td class="py-4 px-6 border dark:border-light-100 dark:text-white dark:bg-dark-800 dark:hover:bg-dark-300">Laptop</td>
          <td class="py-4 px-6 border dark:border-light-100 dark:text-white dark:bg-dark-800 dark:hover:bg-dark-300">$2999</td>
          <td class="py-4 px-6 border dark:border-light-100 dark:text-white dark:bg-dark-800 dark:hover:bg-dark-300">
            <button
              type="button"
              class="focus:outline-none text-white bg-yellow-500 hover:bg-yellow-600 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
            >
              edit
            </button>
            <button
              type="button"
              class="focus:outline-none text-white bg-red-800 hover:bg-red-900 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
            >
              Delete
            </button>
          </td>
        </tr>
        <tr class="border-b bg-gray-800 border-gray-700 hover:bg-dark-300">
          <td class="p-4 w-4 border dark:border-light-100 dark:text-white dark:bg-dark-800 dark:hover:bg-dark-300">2</td>
          <th
            scope="row"
            class="py-4 px-6 border dark:border-light-100 dark:text-white dark:bg-dark-800 dark:hover:bg-dark-300 font-medium whitespace-nowrap text-white"
          >
            Microsoft Surface Pro
          </th>
          <td class="py-4 px-6 border dark:border-light-100 dark:text-white dark:bg-dark-800 dark:hover:bg-dark-300">White</td>
          <td class="py-4 px-6 border dark:border-light-100 dark:text-white dark:bg-dark-800 dark:hover:bg-dark-300">Laptop PC</td>
          <td class="py-4 px-6 border dark:border-light-100 dark:text-white dark:bg-dark-800 dark:hover:bg-dark-300">$1999</td>
          <td class="py-4 px-6 border dark:border-light-100 dark:text-white dark:bg-dark-800 dark:hover:bg-dark-300">
            <button
              type="button"
              class="focus:outline-none text-white bg-yellow-500 hover:bg-yellow-600 focus:ring-4 focus:ring-yellow-500 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
            >
              edit
            </button>
            <button
              type="button"
              class="focus:outline-none text-white bg-red-800 hover:bg-red-900 focus:ring-4 focus:ring-red-500 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
            >
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script lang="ts">
export default {
  name: "TableVue",
};
</script>
