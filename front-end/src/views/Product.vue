<template>
  <div class="container row">
    <div class="col-lg-8 offset-lg-2">
      <InputSearch v-model="searchText" /><br />
    </div>
    <div class="container">
      <div class="col-md-12">
        <h4 style="text-align: center">Danh sách Sản phẩm Book</h4>
        <hr />
        <div>
          <ProductList
            v-if="filteredProductsCount > 0"
            :products="filteredProducts"
            v-model:activeIndex="activeIndex"
          />
          <p v-else>Không có liên hệ nào.</p>
        </div>
        <div class="mt-3 row justify-content-around align-items-center">
          <button
            class="button col-lg-3"
            role="button"
            @click="refreshList()"
            style="background-color: #ffb700;"
          >
            Làm mới
          </button>
          <button
            class="button col-lg-3"
            role="button"
            @click="goToAddProduct"
          >
            Thêm sản phẩm
          </button>
          <button
            class="button col-lg-3"
            role="button"
            @click="removeAllProducts"
            style="background-color: #d00000;"
          >
           Xóa tất cả
          </button>
        </div>
      </div>
    </div>

    <div class="mt-3 col-md-12">
      <div v-if="activeProduct">
        <div class="modal" id="myModal">
          <div class="modal-dialog modal-lg modal-dialog-centered">
            <div class="modal-content">
              <!-- Modal Header -->
              <div class="modal-header">
                <h5 class="modal-title" id="staticBackdropLabel">
                  Chi tiết sản phẩm
                </h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>

              <!-- Modal body -->
              <div class="modal-body">
                <ProductCard :product="activeProduct" />
              </div>

              <!-- Modal footer -->
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Thoát
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductCard from "@/components/ProductCard.vue";
import InputSearch from "@/components/InputSearch.vue";
import ProductList from "@/components/ProductList.vue";
import ProductService from "@/services/product.service";

export default {
  components: {
    ProductCard,
    InputSearch,
    ProductList,
  },
  data() {
    return {
      products: [],
      activeIndex: -1,
      searchText: "",
    };
  },
  watch: {
    // Giám sát các thay đổi của biến searchText.
    // Bỏ chọn phần tử đang được chọn trong danh sách.
    searchText() {
      this.activeIndex = -1;
    },
  },
  computed: {
    // Chuyển các đối tượng product thành chuỗi để tiện cho tìm kiếm.
    productStrings() {
      return this.products.map((product) => {
        const { name, image, describe, price } = product;
        return [name, image, describe, price].join("");
      });
    },
    // Trả về các product có chứa thông tin cần tìm kiếm.
    filteredProducts() {
      if (!this.searchText) return this.products;
      return this.products.filter((_product, index) =>
        this.productStrings[index].includes(this.searchText)
      );
    },
    activeProduct() {
      if (this.activeIndex < 0) return null;
      return this.filteredProducts[this.activeIndex];
    },
    filteredProductsCount() {
      return this.filteredProducts.length;
    },
  },
  methods: {
    async retrieveProducts() {
      try {
        this.products = await ProductService.getAll();
      } catch (error) {
        console.log(error);
      }
    },
    refreshList() {
      this.retrieveProducts();
      this.activeIndex = 1;
    },
    async removeAllProducts() {
      if (confirm("Bạn muốn xóa tất cả các sản phẩm?")) {
        try {
          await ProductService.deleteAll();
          this.refreshList();
        } catch (error) {
          console.log(error);
        }
      }
    },

    goToAddProduct() {
      this.$router.push({ name: "product-add" });
    },
  },
  mounted() {
    this.refreshList();
  },
};
</script>

<style scoped>
.page {
  text-align: left;
  max-width: 750px;
}

.hidden {
  display: none;
}
</style>
