<script>
export default {
    props: {
        products: { type: Array, default: [] },
        activeIndex: { type: Number, default: -1 },
    },
    emits: ["update:activeIndex"],
    methods: {
        updateActiveIndex(index) {
            this.$emit("update:activeIndex", index);
        }
    }

};


</script>

<template>
    <div class="container">
        <table class="table ">
            <thead>
                <tr>
                    <th scope="col">Stt</th>
                    <th scope="col">Hình sản phẩm</th>
                    <th scope="col">Tên sản phẩm</th>
                    <th scope="col">Mô tả sản phẩm</th>
                    <th scope="col">Giá sản phẩm</th>
                    <th scope="col">Chi tiết sản phẩm</th>
                    <th scope="col">Chỉnh sửa</th>
                </tr>
            </thead>
            <tbody v-for="(product, index) in products" :key="product._id" :class="{ active: index === activeIndex }"
                @click="updateActiveIndex(index)">
                <tr style="text-align: center;padding: 10px;">
                    <th scope="row">{{ index + 1 }}</th>
                    <td><img v-bind:src="product.image" class="card-img-top" alt="..." style="height:80px ;width: 80px;">
                    </td>
                    <td>{{ product.name }}</td>
                    <td>{{ product.describe }}</td>
                    <td>{{ product.price }} VNĐ</td>
                    <!-- {{product._id}} -->
                    <td class="btn btn-success " data-bs-toggle="modal" data-bs-target="#myModal" style="margin-top: 10px;">
                        Xem chi tiết</td>
                    <td>
                        <router-link :to="{
                            name: 'product-edit',
                            params: { id: product._id },
                        }">
                            <i class='fas fa-edit' style="font-size:20px;background-color:greenyellow;padding: 10px;"></i>
                        </router-link>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
