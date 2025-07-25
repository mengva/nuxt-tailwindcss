<template>
  <div>
    <AppBar />
    <SidebarLeft />
    <div :style="{ 'width': `calc(100% - ${sidebarWidth})` }" class="ml-auto p-4">
      <slot />
    </div>
    <!-- <Footer /> -->
  </div>
</template>

<script lang="ts" setup>

// use cookie
const sidebarWidth = useCookie<string>("width");

</script>

<style></style>