<template>
  <div class="flex justify-center mb-4">
    <fb:login-button scope="public_profile,email" onlogin="checkLoginState();">
    </fb:login-button>
  </div>
</template>
<script lang="ts">

export default {
  name: "LoginWithFBVue",
  // methods: {
  //   statusChangeCallback(response: any) {
  //     console.log("statusChangeCallback");
  //     console.log(response);
  //     if (response.status === "connected") {
  //       console.log("true");
  //     } else {
  //       console.log("false");
  //     }
  //   },
  //   checkLoginState() {
  //     FB.getLoginStatus(function (response: any) {
  //       statusChangeCallback(response);
  //     });

  //     (window.fbAsyncInit = function () {
  //       FB.init({
  //         appId: "{app-id}",
  //         cookie: true,
  //         xfbml: true,
  //         version: "{api-version}",
  //       });
  //     }),
  //       FB.getLoginStatus(function (response: any) {
  //         statusChangeCallback(response);
  //       });
  //   },
  // },
  // setup() {
  //   function statusChangeCallback(response: any) {
  //     console.log("statusChangeCallback");
  //     console.log(response);
  //     if (response.status === "connected") {
  //       console.log("true");
  //     } else {
  //       console.log("false");
  //     }
  //   }

  //   function checkLoginState() {
  //     FB.getLoginStatus(function (response: any) {
  //       statusChangeCallback(response);
  //     });
  //   }

  //   window.fbAsyncInit = function () {
  //     FB.init({
  //       appId: "{app-id}",
  //       cookie: true,
  //       xfbml: true,
  //       version: "{api-version}",
  //     });

  //     FB.getLoginStatus(function (response: any) {
  //       statusChangeCallback(response);
  //     });
  //   };
  // },
};
</script>
