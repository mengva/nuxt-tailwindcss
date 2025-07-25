<template>
    <div>
        <img :src="srcUrl ? srcUrl : ''" :style="{ 'background-image': `url(${styleUrl ? styleUrl : ''})` }"
            :class="className" alt="image not found">
    </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';

const props = defineProps({
    srcUrl: String,
    styleUrl: String,
    className: String,
});
</script>

<style></style>