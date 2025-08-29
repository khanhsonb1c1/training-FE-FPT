<template>
    <div class="container d-flex justify-content-center align-items-center min-vh-100">
      <div class="card shadow-lg p-4 w-100" style="max-width: 500px;">
        <h2 class="text-center mb-4">Đăng ký</h2>
        <form @submit.prevent="handleRegister">
          <!-- Fullname -->
          <div class="mb-3">
            <label for="fullname" class="form-label">Họ và tên</label>
            <input
              type="text"
              class="form-control"
              id="fullname"
              v-model="form.fullname"
              required
            />
          </div>
  
          <!-- Email -->
          <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <input
              type="email"
              class="form-control"
              id="email"
              v-model="form.email"
              required
            />
          </div>
  
          <!-- Password -->
          <div class="mb-3">
            <label for="password" class="form-label">Mật khẩu</label>
            <input
              type="password"
              class="form-control"
              id="password"
              v-model="form.password"
              required
            />
          </div>
  
          <!-- Confirm Password -->
          <div class="mb-3">
            <label for="confirmPassword" class="form-label">Xác nhận mật khẩu</label>
            <input
              type="password"
              class="form-control"
              id="confirmPassword"
              v-model="form.confirmPassword"
              required
            />
          </div>
  
          <!-- Submit -->
          <button type="submit" class="btn btn-primary w-100">Đăng ký</button>
        </form>
  
        <p class="text-center mt-3">
          Đã có tài khoản?
          <a href="/login">Đăng nhập ngay</a>
        </p>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { reactive } from "vue"
  
  const form = reactive({
    fullname: "",
    email: "",
    password: "",
    confirmPassword: ""
  })
  
  function handleRegister() {
    if (form.password !== form.confirmPassword) {
      alert("Mật khẩu không khớp!")
      return
    }
    console.log("Dữ liệu đăng ký:", form)
    alert("Đăng ký thành công (demo)")
  }
  </script>
  
  <style scoped>
  body {
    background-color: #f8f9fa;
  }
  </style>
  