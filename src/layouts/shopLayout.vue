<template>
  <div>
    <TheNavbar />
    <div class="container">
      <div class="row">
        <div class="card-body">
          <transition
            enter-active-class="animate__animated animate__fadeInLeft"
            leave-active-class="animate__animated animate__fadeOut"
            appear
            mode="out-in"
          >
            <slot><h1>Hauptbereich</h1></slot>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TheNavbar from "@/components/auth/TheNavbar.vue";
export default {
  name: "shopLayout",
  components: {
    TheNavbar,
  },
};
</script>

<style scoped>
</style>