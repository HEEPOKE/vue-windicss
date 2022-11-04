<template>
  <HeaderLoginVue />
  <div class="relative grid place-items-center">
    <div class="w-lg rounded-lg border mt-3 border-dark-700 bg-light-100">
      <form>
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
        <div class="ml-3 mr-3 mt-3">
          <label class="block mb-2 font-extrabold text-lg"> Password </label>
          <input
            type="password"
            name="password"
            class="text-md rounded-lg block w-full p-2.5 border border-gray-200 bg-gray-300 text-dark-900 placeholder-dark-200"
            placeholder="Enter Password"
            minlength="8"
            required
          />
        </div>
        <div class="flex items-center ml-3 mt-2">
          <input
            id="default-checkbox"
            type="checkbox"
            value=""
            class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            for="default-checkbox"
            class="ml-2 text-sm font-medium text-dark-900"
            >Remember Me</label
          >
        </div>
        <!-- <div class="relative float-right mr-3">
          <RouterLink class="cursor-pointer" to="/forgotpassword">
            <a class="hover:underline hover:text-blue-600">Forgot Password?</a>
          </RouterLink>
        </div> -->
        <div class="flex justify-center mt-5">
          <button
            type="submit"
            class="text-white w-1/3 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-md px-5 py-2.5 mr-2 mb-2"
          >
          Login
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
      <div  class="text-center text-dark-900 text-lg">OR</div>
      <LoginWithGoogleVue />
    </div>
  </div>
</template>
<script lang="ts">
import HeaderLoginVue from "../../components/auth/HeaderLogin.vue";
import LoginWithGoogleVue from "../../components/auth/LoginWithGoogle.vue";
import LoginwithFBVue from "../../components/auth/LoginwithFB.vue";

export default {
  name: "LoginVue",
  components: {
    HeaderLoginVue,
    LoginWithGoogleVue,
    LoginwithFBVue,
  },
  methods: {
    Back() {
      window.history.back();
    },
  },
};
</script>
