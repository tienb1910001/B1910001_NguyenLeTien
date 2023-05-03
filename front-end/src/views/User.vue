<template>
  <div class="container row">
    <div class="col-md-10 row margin-tb-15">
      <InputSearch v-model="searchText" />
    </div>
    <div class="mt-3 col-md-6 row">
      <div class="mg-3 margin-bottom-15">
        <h4 style="font-family: 'Roboto', sans-serif">
          Thông tin người dùng
          <i class="fas fa-address-book"></i>
        </h4>
        <UserList
          v-if="filteredUsersCount > 0"
          :users="filteredUsers"
          v-model:activeIndex="activeIndex"
        />
        <p v-else>Không có thông tin người dùng.</p>
      </div>
      <div>
        <div class="d-flex justify-content-evenly">
          <div>
            <button
              class="button btn-primary"
              role="button"
              @click="refreshList"
            >
              <i class="fas fa-repeat"></i>Làm mới
            </button>
          </div>
          <div>
            <button class="button" role="button" @click="goToAddUser">
              <i class="fas fa-plus"></i> Thêm mới
            </button>
          </div>
          <div>
            <button
              class="button btn-danger"
              role="button"
              @click="removeAllUsers"
            >
              <i class="fas fa-trash"></i> Xóa tất cả
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-3 col-md-6 row">
      <div v-if="activeUser">
        <h4 style="font-family: 'Roboto', sans-serif">
          Chi tiết Liên hệ
          <i class="fas fa-address-card"></i>
        </h4>
        <UserCard :users="activeUser" />
        <router-link
          :to="{
            name: 'user-edit',
            params: { id: activeUser._id },
          }"
        >
          <span class="mt-2 badge badge-warning">
            <i class="fas fa-edit"></i> Hiệu chỉnh</span
          >
        </router-link>
      </div>
    </div>
    <div class="mt-3"></div>
  </div>
</template>

<script>
import UserCard from "@/components/UserCard.vue";
import InputSearch from "@/components/InputSearch.vue";
import UserList from "@/components/UserList.vue";
import UserService from "@/services/user.service";

export default {
  components: {
    UserCard,
    InputSearch,
    UserList,
  },
  data() {
    return {
      users: [],
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
    // Chuyển các đối tượng user thành chuỗi để tiện cho tìm kiếm.
    userStrings() {
      return this.users.map((user) => {
        const { name, address, email, phone } = user;
        return [name, address, email, phone].join("");
      });
    },
    // Trả về các users có chứa thông tin cần tìm kiếm.
    filteredUsers() {
      if (!this.searchText) return this.users;
      return this.users.filter((_user, index) =>
        this.userStrings[index].includes(this.searchText)
      );
    },
    activeUser() {
      if (this.activeIndex < 0) return null;
      return this.filteredUsers[this.activeIndex];
    },
    filteredUsersCount() {
      return this.filteredUsers.length;
    },
  },
  methods: {
    async retrieveUsers() {
      try {
        this.users = await UserService.getAll();
      } catch (error) {
        console.log(error);
      }
    },
    refreshList() {
      this.retrieveUsers();
      this.activeIndex = 3;
    },
    async removeAllUsers() {
      if (confirm("Bạn muốn xóa tất cả liên hệ?")) {
        try {
          await UserService.deleteAll();
          this.refreshList();
        } catch (error) {
          console.log(error);
        }
      }
    },

    goToAddUser() {
      this.$router.push({ name: "user-add" });
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
