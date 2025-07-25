<template>
  <div class="w-full">
    <div class="grid grid-cols-2 gap-x-1 mb-6">
      <h1 class="text-4xl text-slate-800 dark:text-slate-300">Our products</h1>
      <div>
        <input type="search" placeholder="Search something..."
          class="w-full h-[50px] px-4 rounded-xl caret-slate-600 dark:caret-slate-300 dark:text-slate-300 bg-slate-100 dark:bg-slate-800">
      </div>
    </div>
    <!-- <Carousel/> -->
    <div v-if="!isLoading" class="custom-grid">
      <Card v-for="(product, index) in products" :key="index" :product="product" />
    </div>
    <div v-else class="custom-grid">
      <div v-for="i in 12" :key="i" class="w-full relative overflow-hidden h-82 bg-slate-200 hover:bg-slate-300/80 dark:hover:bg-slate-800 dark:bg-slate-900 rounded-3xl"></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';

const products = ref([]);
const filters = ref({
    page: 1,
    limit: 24,
});
const isLoading = ref(false);

const useProductStores = productStore();

// method

async function onGetProducts() {
  try {
    isLoading.value = true;
    const data = await useProductStores.getProducts(filters);
    isLoading.value = false;
    products.value = data.data;
    console.log(data);
  } catch (error) { }
}

onMounted(() => {
  onGetProducts();
});

</script>

<style></style>