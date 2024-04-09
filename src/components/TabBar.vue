<script setup lang="ts">
const active = ref(0)
</script>

<template>
  <van-tabbar v-model="active" route>
    <van-tabbar-item replace to="/">
      首页
      <template #icon>
        <div class="i-carbon:home" />
      </template>
    </van-tabbar-item>
    <van-tabbar-item replace to="/login">
      用户中心
      <template #icon>
        <div class="i-carbon:user" />
      </template>
    </van-tabbar-item>
  </van-tabbar>
</template>
