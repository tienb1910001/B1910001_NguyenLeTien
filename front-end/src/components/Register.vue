<template>
  <div class="container">
    <h1 class="content-center">Đăng ký</h1>
    <div
      class=""
      style="display: flex; align-items: center; justify-content: center"
    >
      <Form
        @submit="submitRegister"
        :validation-schema="registerFormSchema"
        style="width: 500px"
      >
        <div class="form-group">
          <label for="name">Tên đăng nhập</label>
          <Field
            name="name"
            type="text"
            class="form-control"
            v-model="registerLocal.name"
          />
          <ErrorMessage name="name" class="error-feedback" />
        </div>
        <div class="form-group">
          <label for="password">Mật khẩu</label>
          <Field
            name="password"
            type="password"
            class="form-control"
            v-model="registerLocal.password"
          />
          <ErrorMessage name="password" class="error-feedback" />
        </div>

        <div class="form-group margin-top-20 margin-bottom-20">
          <button class="button">Đăng ký</button>
        </div>
      </Form>
    </div>
  </div>
</template>

<script>
import * as yup from "yup";
import { Form, Field, ErrorMessage } from "vee-validate";
import LoginService from "@/services/login.service";
export default {
  name: "register",
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  emits: ["submit:register"],

  data() {
    const registerFormSchema = yup.object().shape({
      name: yup.string().required("Tài khoản không được để trống."),
      password: yup.string().required("Mật khẩu không được để trống"),
    });
    return {
      registerLocal: {
        name: "",
        password: "",
      },
      registerFormSchema,
    };
  },
  methods: {
    async submitRegister(data) {
      try {
        await LoginService.create(data);
        alert("Tạo tài khoản thành công");
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style scoped>
.error-feedback {
  color: red;
}
</style>
