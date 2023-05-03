<template>
  <div class="container" style="display: flex">
    <br />
    <div v-if="product" class="page">
      <h4 style="font-weight: 700; text-align: center">Thêm sản phẩm mới</h4>
      <ProductFrom :product="product" @submit:product="createProduct" />
      <p>{{ message }}</p>
    </div>
  </div>
</template>

<script>
import ProductFrom from "@/components/ProductForm.vue";
import ProductService from "@/services/product.service";
export default {
  components: {
    ProductFrom,
  },
  props: {
    // id: { type: String, required: true },
  },
  data() {
    return {
      product: {},
      message: "",
    };
  },
  methods: {
    async createProduct(data) {
      try {
        await ProductService.create(data);
        alert("Sản phẩm đã được thêm thành công.");
        this.$router.push({ name: "product" });
      } catch (error) {
        console.log(error);
      }
    },
  },
  created() {
    this.message = "";
  },
};
</script>
