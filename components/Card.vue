<template>
    <div class="w-full relative overflow-hidden bg-slate-200 hover:bg-slate-300/80 dark:hover:bg-slate-800 dark:bg-slate-900 rounded-3xl">
        <button @click="onToggleFavorite()" type="button"
            class="absolute top-2 right-2 z-[1] w-[45px] h-[45px] cursor-pointer flex rounded-full bg-slate-600/20 hover:bg-slate-600/30 hover:-translate-y-0.5">
            <Icon name="fa:heart" :class="`${isFavorite ? 'text-rose-600' : 'text-slate-200'} text-2xl m-auto`" />
        </button>
        <div class="w-full overflow-hidden" @click="navigateTo(`/user/products/${product?.id}`)">
            <Image 
                :src-url="product?.Images[0]?.image"
                style-url=""
                class-name="aspect-[3/2] object-cover object-center hover:scale-110"
            />
        </div>
        <div class="p-4">
            <h3 class="text-2xl mb-2 text-slate-800 dark:text-slate-300 line-clamp-1">{{ product?.name }}</h3>
            <div class="text-md mb-1 text-slate-600 dark:text-slate-400">{{ product?.Categories?.category }}</div>
            <div class="text-md text-slate-600 dark:text-slate-400">stock: <span class="text-pink-600">{{ product?.quantity }}</span></div>
            <button type="button"
                class="relative mt-2 cursor-pointer flex w-full gap-x-1 items-center justify-center bg-purple-600 hover:bg-purple-700 h-[45px] rounded-2xl">
                <icon name="ic:baseline-shopping-cart" class="text-3xl text-slate-200" />
                <span class="text-slate-200">Add To Cart</span>
                <div v-if="token"
                    class="absolute hover:-translate-y-0.5 w-[30px] h-[30px] flex bg-pink-600/10 rounded-full -top-3 -right-2">
                    <div class="w-[15px] h-[15px] bg-pink-600 rounded-full m-auto"></div>
                </div>
            </button>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const props = defineProps({
    product: Object
});

const isFavorite = ref(false);

// cookie
const token = useCookie("token");

function onToggleFavorite(){
    isFavorite.value = !isFavorite.value;
}

</script>

<style></style>