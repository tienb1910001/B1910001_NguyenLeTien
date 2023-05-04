<template>
  <Form
    @submit="submitProduct"
    :validation-schema="productFormSchema"
    class="container"
  >
    <div class="form-group">
      <label for="name">Tên</label>
      <Field
        name="name"
        type="text"
        class="form-control"
        v-model="productLocal.name"
        style="width: 600px"
      />
      <ErrorMessage name="name" class="error-feedback" />
    </div>
    <div class="form-group">
      <label for>Hình ảnh</label>
      <Field
        name="image"
        type="text"
        class="form-control"
        v-model="productLocal.image"
        style="width: 600px"
      />
      <ErrorMessage name="image" class="error-feedback" />
    </div>
    <div class="form-group">
      <label for="mota">Mô tả sản phẩm</label>
      <Field
        name="describe"
        type="text"
        class="form-control"
        v-model="productLocal.describe"
        style="width: 600px"
      />
      <ErrorMessage name="describe" class="error-feedback" />
    </div>
    <div class="form-group">
      <label for="gia">Giá</label>
      <Field
        name="price"
        type="text"
        class="form-control"
        v-model="productLocal.price"
        style="width: 600px"
      />
      <ErrorMessage name="price" class="error-feedback" />
    </div>
    <div class="form-group form-check margin-top-10">
      <input
        name="favorite"
        type="checkbox"
        class="form-check-input"
        v-model="productLocal.favorite"
      />
      <label for="favorite" class="form-check-label">
        <strong>Liên hệ yêu thích</strong>
      </label>
    </div>

    <div class="margin-top-10">
      <button class="button" style="background-color: #0077b6;">
        Lưu
      </button>
      &nbsp;
      <button
        v-if="productLocal._id"
        type="button"
        class="button "
        style="background-color: #d00000;"
        @click="deleteProduct"
        
      >
        Xóa
      </button>
    </div>
  </Form>
</template>

<script>
import * as yup from "yup";
import { Form, Field, ErrorMessage } from "vee-validate";

export default {
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  emits: ["submit:product", "delete:product"],
  props: {
    product: { type: Object, required: true },
  },
  data() {
    const productFormSchema = yup.object().shape({
      name: yup
        .string()
        .required("Tên phải có giá trị.")
        .min(2, "Tên phải ít nhất 2 ký tự.")
        .max(50, "Tên có nhiều nhất 50 ký tự."),
      image: yup.string().max(500, " tối đa 500 ký tự."),
      describe: yup.string().max(500, "Địa chỉ tối đa 500 ký tự."),
      price: yup.string(),
    });
    return {
      productLocal: this.product,
      productFormSchema,
    };
  },
  methods: {
    submitProduct() {
      this.$emit("submit:product", this.productLocal);
    },
    deleteProduct() {
      this.$emit("delete:product", this.productLocal.id);
    },
  },
};
</script>

<style scoped>
@import "@/assets/form.css";
.error-feedback {
  color: red;
}
.div-cha {
  display: flex;
  justify-content: center;
}
</style>
