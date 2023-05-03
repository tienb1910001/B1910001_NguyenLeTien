<template>
  <div class="container" style="display: flex">
    <br />
    <div v-if="user" class="page">
      <h4 style="font-weight: 700; text-align: center">Thêm người dùng mới</h4>
      <UserForm :user="user" @submit:user="createUser" />
      <p>{{ message }}</p>
    </div>
  </div>
</template>

<script>
import UserForm from "@/components/UserForm.vue";
import UserService from "@/services/user.service";
export default {
  components: {
    UserForm,
  },
  props: {
    // id: { type: String, required: true },
  },
  data() {
    return {
      user: {},
      message: "",
    };
  },
  methods: {
    async createUser(data) {
      try {
        await UserService.create(data);
        alert("người dùng đã được thêm thành công.");
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
