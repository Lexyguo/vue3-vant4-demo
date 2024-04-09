<script>
export default {
  setup() {
    return {}
  },
}
</script>

<template>
  <main text="gray-700 dark:gray-200">
    <RouterView />

    <div mx-auto mt-15 text-center text-10 text-gray-500>
      <br>
      首页
      <br>
    </div>

    <TabBar />
  </main>
</template>

<style lang="scss" scoped></style>
