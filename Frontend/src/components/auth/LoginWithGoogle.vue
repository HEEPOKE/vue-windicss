<template>
  <div class="flex justify-center mb-4">
    <GoogleLogin :callback="callback" popup-type="TOKEN" />
  </div>
</template>
<script lang="ts">
import { decodeCredential } from "vue3-google-login";
import { CallbackTypes } from "vue3-google-login";

export default {
  name: "LoginWithGoogleVue",
  setup() {
    const callback: CallbackTypes.CodeResponseCallback = (response) => {
      console.log("Authorisation code", response.code);
    };
  },
};
</script>
