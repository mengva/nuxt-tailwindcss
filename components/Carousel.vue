<template>
    <div class="w-full mb-6 lg:h-[45rem] max-lg:aspect-[4/3] bg-cyan-600 relative">
        <!-- Left Arrow -->
        <button type="button" @click="changeCarousel(-1)" :class="[
            'z-[1] absolute left-0 top-1/2 -translate-y-1/2 text-slate-500 shadow-md cursor-pointer w-[35px] md:w-[40px] h-[80px] md:h-[100px] hover:w-[65px] rounded-r-[50px]',
            'dark:active:bg-slate-900 dark:bg-slate-900 hover:bg-slate-800'
            , 'active:bg-slate-300 bg-slate-100 hover:bg-slate-200',
        ]">
            <Icon name="ic:baseline-arrow-back" class="text-xl" />
        </button>

        <!-- Right Arrow -->
        <button type="button" @click="changeCarousel(1)" :class="[
            'z-[1] absolute right-0 top-1/2 -translate-y-1/2 text-slate-500 shadow-md cursor-pointer w-[35px] md:w-[40px] h-[80px] md:h-[100px] hover:w-[65px] rounded-l-[50px]',
            'dark:active:bg-slate-900 dark:bg-slate-900 hover:bg-slate-800'
            , 'active:bg-slate-300 bg-slate-100 hover:bg-slate-200',
        ]">
            <Icon name="ic:baseline-arrow-forward" class="text-xl" />
        </button>

        <!-- Image Container -->
        <div class="relative w-full h-full inset-0">
            <div ref="containerRef" :style="{
                transition: 'transform 1s ease',
                width: `${width * images.length}px`,
                transform: `translateX(-${currentIndex * width}px)`,
            }" class="h-full flex absolute inset-0">
                <div v-for="(image, index) in images" :key="index" :style="{ width: `${width}px` }" class="h-full">
                    <img :src="image" alt="carousel"
                        class="w-full h-full object-cover hue-rotate-15 bg-cover shadow-[inset_0_0_1000px]" />
                </div>
            </div>

            <!-- Dots -->
            <div class="w-full gap-x-2 flex justify-center absolute z-[2] bottom-2">
                <div v-for="(image, index) in images" :key="index" @click="goToIndex(index)" :class="[
                    'w-[20px] h-[20px] cursor-pointer rounded-full',
                    index === currentIndex ? 'bg-[#cf3bed] scale-[1.2]' : 'bg-slate-400',
                ]"></div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, inject } from 'vue'
import { carouselImageList as images } from '~/utils/carouselImages'

const containerRef = ref<HTMLElement | null>(null)

const width = ref(0);
const currentIndex = ref(0)
let intervalId: number | null = null

const updateSize = () => {
    width.value = window.innerWidth
    if (containerRef.value) {
        containerRef.value.style.width = `${width.value * images.length}px`
        containerRef.value.style.transform = `translateX(-${currentIndex.value * width.value}px)`
    }
}

const changeCarousel = (step: number) => {
    const total = images.length
    currentIndex.value = (currentIndex.value + step + total) % total
    if (containerRef.value) {
        containerRef.value.style.transform = `translateX(-${currentIndex.value * width.value}px)`
    }
}

const goToIndex = (index: number) => {
    currentIndex.value = index
    if (containerRef.value) {
        containerRef.value.style.transform = `translateX(-${index * width.value}px)`
    }
}

onMounted(() => {
    width.value = window.innerWidth;
    updateSize()
    window.addEventListener('resize', updateSize)

    intervalId = window.setInterval(() => {
        changeCarousel(1)
    }, 5000)
})

onUnmounted(() => {
    window.removeEventListener('resize', updateSize)
    if (intervalId) clearInterval(intervalId)
})
</script>

<style scoped>
/* Add any extra styling here if needed */
</style>
