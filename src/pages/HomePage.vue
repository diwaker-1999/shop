<template>
  <TheTwoColumnsLayout
    :leftColumnClass="'col-md-8 bg-vue'"
    :rightColumnClass="'col-md-4'"
    :fullsize="true"
  >
    <template v-slot:leftCol>
      <div class="mt-5 text-center">
        <div class="display-1 my-5">Der Shop</div>
        <div class="display-4 my-5">
          Erhalten Sie Zugriff auf Limeted Edition Attikel
        </div>
      </div>
      <div class="my-5 offset-4 col-4">
        <img src="@/assets/shopping.svg" class="img-fluid" />
      </div>
    </template>
    <template v-slot:righttCol>
      <transition
        enter-active-class="animate__animated animate__bounceInRight"
        leave-active-class="animate__animated animate__bounceOutRight"
        mode="out-in"
      >
        <component
          :is="componentName"
          @change-component="changeComponent"
        ></component>
      </transition>
    </template>
  </TheTwoColumnsLayout>
</template>


<script>
import LoginComponent from "@/components/auth/Login";
import TheTwoColumnsLayout from "@/layouts/TheTwoColumnsLayout";
import RegisterComponent from "@/components/auth/Register";
export default {
  name: "HomePage",
  components: {
    TheTwoColumnsLayout,
    RegisterComponent,
    LoginComponent,
  },
  data() {
    return {
      componentName: "RegisterComponent",
    };
  },
  methods: {
    changeComponent(payload) {
      this.componentName = payload.componentName;
    },
  },
};
</script>

<style scoped>
</style>