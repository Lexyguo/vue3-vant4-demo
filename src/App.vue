<script setup lang="ts">
import { storeToRefs } from 'pinia'
import useAppStore from '@/stores/modules/app'
import useRouteTransitionNameStore from '@/stores/modules/routeTransitionName'
import useAutoThemeSwitcher from '@/hooks/useAutoThemeSwitcher'

const appStore = useAppStore()
const { mode } = storeToRefs(appStore)

const routeTransitionNameStore = useRouteTransitionNameStore()
const { routeTransitionName } = storeToRefs(routeTransitionNameStore)

const { initializeThemeSwitcher } = useAutoThemeSwitcher(appStore)

onMounted(() => {
  initializeThemeSwitcher()
})
</script>

<template>
  <VanConfigProvider :theme="mode">
    <NavBar />
    <router-view v-slot="{ Component, route }">
      <transition :name="routeTransitionName">
        <div :key="route.name" class="app-wrapper">
          <component :is="Component" />
        </div>
      </transition>
    </router-view>
  </VanConfigProvider>
</template>

<style scoped>
.app-wrapper {
  width: 100%;
  height: 100%;
  padding-top: 46px;
  overflow-y: auto;
  position: absolute;
  left: 0;
}
</style>
