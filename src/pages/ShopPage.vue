<template>
  <ShopLayout>
    <template #default>
      <div class="row">
        <div class="col" v-for="product in products" :key="product.id">
          <ProductListItem class="col" :product="product" />
        </div>
      </div>
    </template>
  </ShopLayout>
</template>

<script>
import ProductListItem from "@/components/shop/ProductListItem";
import ShopLayout from "@/layouts/shopLayout.vue";
export default {
  name: "ShopPage",
  components: {
    ShopLayout,
    ProductListItem,
  },
  computed: {
    products() {
      return this.$store.getters.products;
    },
  },
};
</script>

<style scoped>
</style>