<script>
    export default {
        props: {
            product: { type: Object, required: true },
        },
    };
</script>

<template>
    <div>
        <div class="p-1">
            <strong>Tên sản phẩm:</strong>
            {{ product.name }}
        </div>
        <div class="p-1">
            <strong></strong>
            <img v-bind:src="product.image" class="card-img-top" alt="..."
                style="width: 50%;display: block; margin-left: auto; margin-right: auto;">
        </div>
        <div class="p-1">
            <strong>Mô tả về sản phẩm:</strong>
            {{ product.describe }}
        </div>
        <div class="p-1" style="font-weight:700 ;font-size: 20px;color: orangered; float: right;">
            <strong>Giá:</strong>
            {{ product.price }} VNĐ
        </div>
        <div class="p-1">
            <strong>Liên hệ yêu thích:&nbsp;</strong>
            <i v-if="product.favorite" class="fas fa-check"></i>
            <i v-else class="fas fa-times"></i>
        </div>
    </div>
</template>