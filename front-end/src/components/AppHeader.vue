<template>
     <div class="container">
        <nav class="navbar navbar-expand-lg" style="background-color: var(--color-main); border-radius: 6px;">
            <div class="container-fluid">
                <a class="navbar-brand">Logo</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <router-link :to="{ name: 'home' }" class="nav-link">Trang chủ</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link :to="{ name: 'about' }" class="nav-link">Giới thiệu</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link :to="{ name: 'contact' }" class="nav-link ">Liên hệ</router-link>
                        </li>
                    </ul>
                    <div class="d-flex ">
                        <div class="dropdown">
                            <a class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                Quản lý
                            </a>
                            <ul class="dropdown-menu">
                                <li>
                                    <router-link :to="{ name: 'user' }" class="dropdown-item">
                                        Quản lý người dùng</router-link>
                                </li>

                                <li>
                                    <router-link :to="{ name: 'product' }" class="dropdown-item">Quản lý sản
                                        phẩm</router-link>
                                </li>
                                <li>
                                    <hr class="dropdown-divider">
                                </li>
                                <li>
                                    <router-link :to="{ name: 'home' }" class="dropdown-item">
                                        Đăng xuất
                                    </router-link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </div> 
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap');
</style>
