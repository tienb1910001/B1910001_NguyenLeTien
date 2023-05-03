<template>
    <div style="display: flex;">
        <div v-if="user" class="page">
            <h4 style="font-weight:700 ;text-align: center;">Hiệu chỉnh thông tin</h4>
            <UserForm :user="user" @submit:user="updateUser" @delete:user="deleteUser" />
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
        id: { type: String, required: true },
    },
    data() {
        return {
            user: null,
            message: "",
        };
    },
    methods: {
        async getUser(id) {
            try {
                this.user = await UserService.get(id);
            } catch (error) {
                console.log(error);
                // Chuyển sang trang NotFound đồng thời giữ cho URL không đổi
                this.$router.push({
                    name: "notfound",
                    params: {
                        pathMatch: this.$route.path.split("/").slice(1)
                    },
                    query: this.$route.query,
                    hash: this.$route.hash,
                });
            }
        },
        async updateUser(data) {
            try {
                await UserService.update(this.user._id, data);
                alert("Thông tin được cập nhật thành công.");
                // this.message = "Liên hệ được cập nhật thành công.";
            } catch (error) {
                console.log(error);
            }
        },
        async deleteUser() {
            if (confirm("Bạn muốn xóa thông tin này?")) {
                try {
                    await UserService.delete(this.user._id);
                    this.$router.push({ name: "user" });
                } catch (error) {
                    console.log(error);
                }
            }
        },
    },
    created() {
        this.getUser(this.id);
        this.message = "";
    },
};
</script>