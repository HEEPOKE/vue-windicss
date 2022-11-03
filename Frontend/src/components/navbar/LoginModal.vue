<template>
  <li>
    <a
      class="md:p-4 py-2 block !cursor-pointer hover:text-purple-700 dark:hover:text-purple-400"
      id="show-modal"
      @click="LoginModal = true"
    >
      Login
    </a>
  </li>

  <Teleport to="body">
    <div
      v-if="LoginModal"
      class="modal-mask relative grid place-items-center"
    >
      <div class="modal-wrapper w-lg bg-light-50 !transition-opacity rounded-2xl shadow-md">
        <div class="modal-container bg-light-50">
          <div class="modal-header">
            <slot name="header">default header</slot>
          </div>

          <div class="modal-body">
            <slot name="body">default body</slot>
          </div>

          <div class="modal-footer">
            <slot name="footer">
              default footer
              <button class="modal-default-button" @click="LoginModal = false">
                OK
              </button>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>
<script lang="ts">
export default {
  name: "LoginModalVue",
  methods: {},
  data() {
    return {
      LoginModal: false,
    };
  },
};
</script>
