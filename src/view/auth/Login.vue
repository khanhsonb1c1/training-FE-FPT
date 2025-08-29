<template>
    <div class="d-flex align-items-center justify-content-center min-vh-100 bg-light">
      <div class="card shadow-lg p-4 rounded-3" style="max-width: 400px; width: 100%;">
        <div class="card-body">
          <h3 class="text-center mb-4">Đăng nhập</h3>
  
          <form @submit.prevent="handleLogin">
            <!-- Email -->
            <div class="mb-3">
              <label for="email" class="form-label">Email</label>
              <input
                v-model="email"
                type="email"
                class="form-control"
                id="email"
                placeholder="Nhập email"
                required
              />
            </div>
  
            <!-- Password -->
            <div class="mb-3">
              <label for="password" class="form-label">Mật khẩu</label>
              <input
                v-model="password"
                type="password"
                class="form-control"
                id="password"
                placeholder="Nhập mật khẩu"
                required
              />
            </div>
  
            <!-- Remember me + Forgot -->
            <div class="d-flex justify-content-between align-items-center mb-3">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" id="rememberMe" v-model="rememberMe" />
                <label class="form-check-label" for="rememberMe">Nhớ mật khẩu</label>
              </div>
              <a href="#" class="text-decoration-none small">Quên mật khẩu?</a>
            </div>
  
            <!-- Button -->
            <div class="d-grid">
              <button type="submit" class="btn btn-primary">Đăng nhập</button>
            </div>
          </form>
  
          <!-- Divider -->
          <div class="text-center my-3 text-muted">— hoặc —</div>
  
          <!-- Social login -->
          <div class="d-flex gap-2">
            <button class="btn btn-outline-danger w-50">
              <i class="bi bi-google"></i> Google
            </button>
            <button class="btn btn-outline-primary w-50">
              <i class="bi bi-facebook"></i> Facebook
            </button>
          </div>
  
          <!-- Register -->
          <p class="text-center mt-4 mb-0">
            Chưa có tài khoản?
            <a href="/register" class="text-decoration-none">Đăng ký</a>
          </p>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from "vue";
  import { useRouter } from "vue-router";

  const email = ref("");
  const password = ref("");
  const rememberMe = ref(false);

  const router = useRouter();

  
  const handleLogin = () => {
    console.log("Email:", email.value);
    console.log("Password:", password.value);
    console.log("Remember Me:", rememberMe.value);
    // TODO: Gọi API login ở đây

    // if success, redirect to home page
    router.push("/");

  };
  </script>
  
  <style scoped>
  /* Nếu cần custom thêm */
  </style>
  