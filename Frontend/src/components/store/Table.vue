<template>
  <div class="overflow-x-auto relative shadow-md mt-6">
    <div class="flex items-center pb-4 mt-1 justify-end mr-3">
      <div class="relative">
        <div class="flex absolute inset-y-0 items-center">
          <svg
            class="w-5 h-5 ml-2 text-gray-400"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </div>
        <input
          type="text"
          id="table-search"
          class="block p-2 pl-10 w-80 text-sm rounded-lg border bg-gray-700 border-gray-600 placeholder-gray-400 text-white"
          placeholder="Search for items"
        />
      </div>
    </div>
    <table class="w-full text-sm text-left text-gray-400">
      <thead class="text-xs uppercase bg-gray-700 text-gray-400">
        <tr class="text-center">
          <th scope="col" class="p-4">#</th>
          <th scope="col" class="py-3 px-6">Product name</th>
          <th scope="col" class="py-3 px-6">Color</th>
          <th scope="col" class="py-3 px-6">Category</th>
          <th scope="col" class="py-3 px-6">Price</th>
          <th scope="col" class="py-3 px-6">Action</th>
        </tr>
      </thead>
      <tbody class="text-center">
        <tr class="border-b bg-gray-800 border-gray-700 hover:bg-gray-600">
          <td class="p-4 w-4">1</td>
          <th
            scope="row"
            class="py-4 px-6 font-medium whitespace-nowrap text-white"
          >
            Apple MacBook Pro 17
          </th>
          <td class="py-4 px-6">Sliver</td>
          <td class="py-4 px-6">Laptop</td>
          <td class="py-4 px-6">$2999</td>
          <td class="py-4 px-6">
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
        <tr class="border-b bg-gray-800 border-gray-700 hover:bg-gray-600">
          <td class="p-4 w-4">2</td>
          <th
            scope="row"
            class="py-4 px-6 font-medium whitespace-nowrap text-white"
          >
            Microsoft Surface Pro
          </th>
          <td class="py-4 px-6">White</td>
          <td class="py-4 px-6">Laptop PC</td>
          <td class="py-4 px-6">$1999</td>
          <td class="py-4 px-6">
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
