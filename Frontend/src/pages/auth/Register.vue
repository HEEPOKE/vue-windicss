<template>
  <HeaderRegisterVue />
  <div class="relative grid place-items-center">
    <div class="w-lg rounded-lg border mt-3 border-dark-700 bg-light-100">
      <form>
        <div class="ml-3 mr-3 mt-2">
          <label class="block mb-2 font-extrabold text-lg">Username</label>
          <input
            type="text"
            name="name"
            class="text-md rounded-lg block w-full p-2.5 border border-gray-200 bg-gray-300 text-dark-900 placeholder-dark-200"
            placeholder="Enter Name"
            required
          />
        </div>
        <div class="ml-3 mr-3 mt-2">
          <label class="block mb-2 font-extrabold text-lg">Email</label>
          <input
            type="text"
            name="email"
            class="text-md rounded-lg block w-full p-2.5 border border-gray-200 bg-gray-300 text-dark-900 placeholder-dark-200"
            placeholder="Enter Email"
            required
          />
        </div>
        <div class="ml-3 mr-3 mt-2">
          <label class="block mb-2 font-extrabold text-lg">Tel</label>
          <input
            type="text"
            name="tel"
            class="text-md rounded-lg block w-full p-2.5 border border-gray-200 bg-gray-300 text-dark-900 placeholder-dark-200"
            placeholder="xxx-xxx-xxxx"
            maxlength="10"
            required
          />
        </div>
        <div class="ml-3 mr-3 mt-3">
          <label class="block mb-2 font-extrabold text-lg">Password</label>
          <input
            type="password"
            name="password"
            class="text-md rounded-lg block w-full p-2.5 border border-gray-200 bg-gray-300 text-dark-900 placeholder-dark-200"
            placeholder="Enter Password"
            minlength="8"
            required
          />
        </div>
        <div class="ml-3 mr-3 mt-3">
          <label class="block mb-2 font-extrabold text-lg"
            >Confrim Password</label
          >
          <input
            type="password"
            name="confirmpassword"
            class="text-md rounded-lg block w-full p-2.5 border border-gray-200 bg-gray-300 text-dark-900 placeholder-dark-200"
            placeholder="Confirm Password"
            minlength="8"
            required
          />
        </div>
        <div class="flex justify-center mt-5">
          <button
            type="submit"
            class="text-white w-1/3 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-md px-5 py-2.5 mr-2 mb-2"
          >
            Save
          </button>
        </div>
      </form>
      <div class="flex justify-center">
        <button
          type="button"
          class="text-white w-1/3 bg-gray-400 hover:bg-gray-500 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-md px-5 py-2.5 mr-2 mb-2"
          @click="Back"
        >
          Back
        </button>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import HeaderRegisterVue from "../../components/auth/HeaderRegister.vue";


export default {
  name: "RegisterVue",
  components: {
    HeaderRegisterVue,
  },
  methods: {
    Back() {
      window.history.back();
    },
  },
};
</script>
