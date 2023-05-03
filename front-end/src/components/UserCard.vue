<script>
export default {
    props: {
        users: { type: Object, required: true },
    },
};
</script>

<template>
    <div class="container" >
        <div class="p-1">
            <strong>Tên:</strong>
            {{ users.name }}
        </div>
        <div class="p-1">
            <strong>E-mail:</strong>
            {{ users.email }}
        </div>
        <div class="p-1">
            <strong>Địa chỉ:</strong>
            {{ users.address }}
        </div>
        <div class="p-1">
            <strong>Điện thoại:</strong>
            {{ users.phone }}
        </div>
        <!-- <div class="p-1">
            <strong>Liên hệ yêu thích:&nbsp;</strong>
            <i v-if="admin.favorite" class="fas fa-check"></i>
            <i v-else class="fas fa-times"></i>
        </div> -->
    </div>
</template>