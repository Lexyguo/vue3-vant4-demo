<script setup lang="ts">
const route = useRoute()
const router = useRouter()

function onBack() {
  if (window.history.state.back)
    history.back()
  else router.replace('/')
}

const title = computed(() => {
  if (!route.meta || !route.meta.title)
    return ''
  return route.meta.title
})
</script>

<template>
  <VanNavBar
    v-show="title"
    :title="title"
    :fixed="true"
    clickable
    left-arrow
    @click-left="onBack"
  />
</template>
