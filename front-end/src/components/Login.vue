<template>
  <div class="container">
    <h1 class="content-center">Đăng nhập</h1>
    <div
      class=""
      style="display: flex; align-items: center; justify-content: center"
    >
      <Form
        @submit="submitLogin"
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
        <div>
          Bạn chưa có tài khoản
          <router-link :to="{ name: 'register' }">Đăng ký</router-link>
        </div>
        <div class="form-group margin-top-20 margin-bottom-20">
          <button class="button">Đăng nhập</button>
        </div>
      </Form>
    </div>
  </div>
</template>

<script>
import * as yup from "yup";
import { Form, Field, ErrorMessage } from "vee-validate";
import LoginService from "@/services/login.service";
import axios from "axios";
export default {
  name: "register",
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  emits: ["submit:register"],
  prop:{
    check: true,
  },
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
    async submitLogin() {
      try {
        if (
          this.registerLocal.name != "" &&
          this.registerLocal.password != ""
        ) {
          if (
            this.registerLocal.name == "letien" &&
            this.registerLocal.password == "letien"
          ) {
            this.$router.push({ name: "home" });
          } else {
            alert("The username and / or password is incorrect");
          }
        } else {
          alert("A username and password must be present");
        }
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
