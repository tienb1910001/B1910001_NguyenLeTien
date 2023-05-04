<template>
  <Form
    @submit="submitRegister"
    :validation-schema="registerFormSchema"
  >
    <div class="form-group">
      <label for="name">Tên đăng nhập</label>
      <Field
        name="name"
        type="text"
        class="form-control"
        v-model="registerLocal.name"
        style="width: 600px"
      />
      <ErrorMessage name="name" class="error-feedback" />
    </div>
    <div class="form-group">
      <label for="name">Mật khẩu</label>
      <Field
        name="password"
        type="password"
        class="form-control"
        v-model="registerLocal.password"
        style="width: 600px"
      />
      <ErrorMessage name="name" class="error-feedback" />
    </div>
    <div class="row">
      <div class="form-group row">
        <button class="btn btn-primary col-lg-11 offset-lg-2">Đăng ký</button>
      </div>
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
  emits: ["submit:register", "delete:register"],
  props: {
    register: { type: Object, required: true },
  },
  data() {
    const registerFormSchema = yup.object().shape({
      name: yup
        .string()
        .required("Tài khoản không được để trống."),
      password: yup
        .string()
        .email("Mật khẩu không được để trống"),
        
    });
    return {
      registerLocal: this.register,
      registerFormSchema,
    };
  },
  methods: {
    submitUser() {
      this.$emit("submit:register", this.registerLocal);
    },
  },
};
</script>

<style></style>
