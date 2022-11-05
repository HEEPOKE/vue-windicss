<template>
  <HeaderVue />
  <div class="relative grid place-items-center">
    <div class="w-10/12 rounded-lg border mt-3 border-dark-700 bg-light-100 dark:bg-dark-800 dark:border-gray-500">
      <form @submit.prevent="handleSubmitForm">
        <div class="ml-3 mr-3 mt-2">
          <label class="block mb-2 font-extrabold text-lg dark:text-white">Name</label>
          <input type="text"
            class="text-md rounded-lg block w-full p-2.5 border border-gray-200 bg-gray-300 text-dark-900 placeholder-dark-200 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            placeholder="Enter Name" required />
        </div>
        <div class="ml-3 mr-3 mt-2">
          <label class="block mb-2 font-extrabold text-lg dark:text-white">
            Color
          </label>
          <input type="text"
            class="text-md rounded-lg block w-full p-2.5 border border-gray-200 bg-gray-300 text-dark-900 placeholder-dark-200 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            placeholder="Enter Color" v-model="product.color" required />
        </div>
        <div class="ml-3 mr-3 mt-2">
          <label class="block mb-2 font-extrabold text-lg dark:text-white">
            Category
          </label>
          <input type="text"
            class="text-md rounded-lg block w-full p-2.5 border border-gray-200 bg-gray-300 text-dark-900 placeholder-dark-200 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            placeholder="Enter Category" v-model="product.category" required />
        </div>
        <div class="ml-3 mr-3 mt-2">
          <label class="block mb-2 font-extrabold text-lg dark:text-white">
            Price
          </label>
          <input type="number"
            class="text-md rounded-lg block w-full p-2.5 border border-gray-200 bg-gray-300 text-dark-900 placeholder-dark-200 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            placeholder="Enter Price" min="{0}" v-model="product.price" required />
        </div>
        <div class="ml-3 mr-3 mt-2">
          <label class="block mb-2 font-extrabold text-lg dark:text-white">
            Image
          </label>
          <input
            class="block mb-5 w-full text-md rounded-lg border cursor-pointer focus:outline-none border-gray-200 bg-gray-300 text-dark-900 placeholder-dark-200 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-gray-400"
            type="file" accept="image/*" v-on:change="" multiple />
        </div>
        <div class="flex justify-center">
          <button type="submit"
            class="text-white w-1/3 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-md px-5 py-2.5 mr-2 mb-2">
            Save
          </button>
        </div>
      </form>
      <div class="flex justify-center">
        <button type="button"
          class="text-white w-1/3 bg-gray-400 hover:bg-gray-500 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-md px-5 py-2.5 mr-2 mb-2"
          @click="Back">
          Back
        </button>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import HeaderVue from "./Header.vue";
import axios from "axios";

export default {
  name: "FormVue",
  components: {
    HeaderVue,
  },
  data() {
    return {
      product: {
        name: "",
        color: "",
        category: "",
        price: "",
        // image: [],
      },
    };
  },
  methods: {
    Back() {
      window.history.back();
    },
    handleSubmitForm() {
      let apiURL = "http://localhost:4000/api/create/product";
      axios.post(apiURL, this.product).then(() => {
        this.$router.push("/store");
        this.product = {
          name: "",
          color: "",
          category: "",
          price: "",
          // image: [],
        };
      })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
