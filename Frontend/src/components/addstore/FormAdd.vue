<template>
  <HeaderVue />
  <div class="relative grid place-items-center">
    <div class="w-10/12 bg-gray-800 rounded-lg mt-3">
      <form>
        <div class="ml-3 mr-3 mt-2">
          <label class="block mb-2 font-extrabold text-lg text-white"
            >name</label
          >
          <input
            type="text"
            name="name"
            class="text-sm rounded-lg block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white"
            placeholder="Enter Name"
            required
          />
        </div>
        <div class="ml-3 mr-3 mt-2">
          <label class="block mb-2 font-extrabold text-lg text-white">
            color
          </label>
          <input
            type="text"
            name="color"
            class="text-sm rounded-lg block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white"
            placeholder="Enter Color"
            required
          />
        </div>
        <div class="ml-3 mr-3 mt-2">
          <label class="block mb-2 font-extrabold text-lg text-white">
            category
          </label>
          <input
            type="text"
            name="category"
            class="text-sm rounded-lg block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white"
            placeholder="Enter Category"
            required
          />
        </div>
        <div class="ml-3 mr-3 mt-2">
          <label class="block mb-2 font-extrabold text-lg text-white">
            preice
          </label>
          <input
            type="number"
            name="price"
            class="text-sm rounded-lg block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white"
            placeholder="Enter Price"
            min="{0}"
            required
          />
        </div>
        <div class="ml-3 mr-3 mt-2">
          <label class="block mb-2 font-extrabold text-lg text-white">
            image
          </label>
          <input
            class="block mb-5 w-full text-sm rounded-lg border cursor-pointer text-gray-400 focus:outline-none bg-gray-600 border-gray-500 placeholder-gray-400"
            type="file"
            name="image"
            accept="image/*"
            multiple
          />
        </div>
        <div class="flex justify-center">
          <button
            type="submit"
            class="text-white w-1/3 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
          >
            Save
          </button>
        </div>
      </form>
      <div class="flex justify-center">
        <button
          type="button"
          class="text-white w-1/3 bg-gray-400 hover:bg-gray-500 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
          oncick=""
        >
          Back
        </button>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import HeaderVue from "./Header.vue";

export default {
  name: "FormVue",
  components: {
    HeaderVue,
  },
};
</script>
