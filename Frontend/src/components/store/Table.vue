<template>
  <HeaderVue />
  <div class="overflow-x-auto relative shadow-md mt-6">
    <div
      class="flex items-center pb-4 mt-1 ml-2 lg:justify-end mr-3 md:justify-center"
    >
      <div class="relative">
        <div class="flex absolute inset-y-0 items-center">
          <font-awesome-icon
            icon="fa-solid fa-magnifying-glass"
            class="ml-5 text-dark-900 dark:text-gray-400"
          />
        </div>
        <input
          type="text"
          id="table-search"
          class="block p-2 pl-10 w-80 text-sm rounded-lg border placeholder-dark-900 border-dark-900 dark:border-light-100 dark:placeholder-gray-400 dark:bg-dark-800 dark:hover:bg-dark-300 dark:text-white"
          placeholder="Search for items"
        />
      </div>
    </div>
    <table class="w-full text-sm table-auto">
      <thead>
        <tr class="text-center">
          <th
            scope="col"
            class="p-4 border border-dark-900 text-dark-900 bg-light-100 hover:bg-light-600 dark:border-light-100 dark:text-white dark:bg-dark-800 dark:hover:bg-dark-300"
          >
            #
          </th>
          <th
            scope="col"
            class="py-3 px-6 border border-dark-900 text-dark-900 bg-light-100 hover:bg-light-600 dark:border-light-100 dark:text-white dark:bg-dark-800 dark:hover:bg-dark-300"
          >
            Product name
          </th>
          <th
            scope="col"
            class="py-3 px-6 border border-dark-900 text-dark-900 bg-light-100 hover:bg-light-600 dark:border-light-100 dark:text-white dark:bg-dark-800 dark:hover:bg-dark-300"
          >
            Color
          </th>
          <th
            scope="col"
            class="py-3 px-6 border border-dark-900 text-dark-900 bg-light-100 hover:bg-light-600 dark:border-light-100 dark:text-white dark:bg-dark-800 dark:hover:bg-dark-300"
          >
            Category
          </th>
          <th
            scope="col"
            class="py-3 px-6 border border-dark-900 text-dark-900 bg-light-100 hover:bg-light-600 dark:border-light-100 dark:text-white dark:bg-dark-800 dark:hover:bg-dark-300"
          >
            Price
          </th>
          <th
            scope="col"
            class="py-3 px-6 border border-dark-900 text-dark-900 bg-light-100 hover:bg-light-600 dark:border-light-100 dark:text-white dark:bg-dark-800 dark:hover:bg-dark-300"
          >
            Action
          </th>
        </tr>
      </thead>
      <tbody>
        <tr class="text-center">
          <td
            class="p-4 w-4 border border-dark-900 text-dark-900 bg-light-100 hover:bg-light-600 dark:border-light-100 dark:text-white dark:bg-dark-800 dark:hover:bg-dark-300"
          >
            1
          </td>
          <td
            class="py-4 px-6 border-dark-900 text-dark-900 bg-light-100 hover:bg-light-600 dark:border dark:border-light-100 dark:text-white dark:bg-dark-800 dark:hover:bg-dark-300"
          >
            Apple MacBook Pro 17
          </td>
          <td
            class="py-4 px-6 border border-dark-900 text-dark-900 bg-light-100 hover:bg-light-600 dark:border-light-100 dark:text-white dark:bg-dark-800 dark:hover:bg-dark-300"
          >
            Sliver
          </td>
          <td
            class="py-4 px-6 border border-dark-900 text-dark-900 bg-light-100 hover:bg-light-600 dark:border-light-100 dark:text-white dark:bg-dark-800 dark:hover:bg-dark-300"
          >
            Laptop
          </td>
          <td
            class="py-4 px-6 border border-dark-900 text-dark-900 bg-light-100 hover:bg-light-600 dark:border-light-100 dark:text-white dark:bg-dark-800 dark:hover:bg-dark-300"
          >
            $2999
          </td>
          <td
            class="py-4 px-6 border border-dark-900 text-dark-900 bg-light-100 hover:bg-light-600 dark:border-light-100 dark:text-white dark:bg-dark-800 dark:hover:bg-dark-300"
          >
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
        <tr class="text-center">
          <td
            class="p-4 w-4 border border-dark-900 text-dark-900 bg-light-100 hover:bg-light-600 dark:border-light-100 dark:text-white dark:bg-dark-800 dark:hover:bg-dark-300"
          >
            2
          </td>
          <td
            class="py-4 px-6 border border-dark-900 text-dark-900 bg-light-100 hover:bg-light-600 dark:border-light-100 dark:text-white dark:bg-dark-800 dark:hover:bg-dark-300"
          >
            Microsoft Surface Pro
          </td>
          <td
            class="py-4 px-6 border border-dark-900 text-dark-900 bg-light-100 hover:bg-light-600 dark:border-light-100 dark:text-white dark:bg-dark-800 dark:hover:bg-dark-300"
          >
            White
          </td>
          <td
            class="py-4 px-6 border border-dark-900 text-dark-900 bg-light-100 hover:bg-light-600 dark:border-light-100 dark:text-white dark:bg-dark-800 dark:hover:bg-dark-300"
          >
            Laptop PC
          </td>
          <td
            class="py-4 px-6 border border-dark-900 text-dark-900 bg-light-100 hover:bg-light-600 dark:border-light-100 dark:text-white dark:bg-dark-800 dark:hover:bg-dark-300"
          >
            $1999
          </td>
          <td
            class="py-4 px-6 border border-dark-900 text-dark-900 bg-light-100 hover:bg-light-600 dark:border-light-100 dark:text-white dark:bg-dark-800 dark:hover:bg-dark-300"
          >
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
import HeaderVue from "./Header.vue";

export default {
  name: "TableVue",
  components: {
    HeaderVue,
  },
};
</script>
