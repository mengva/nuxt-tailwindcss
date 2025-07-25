<template>
  <div>
    <button @click="type !== 'submit' ? onSubmit() : ''" :type="type" :class="buttonClassName">
        <Icon v-if="isShowIcon" :class="iconClassName" :name="icon"/>
        <span v-if="isShowTitle" :class="spanClassName">{{ title }}</span>
    </button>
  </div>
</template>

<script lang="ts" setup>
const props = withDefaults(defineProps<{
    type?: 'button' | 'submit' | 'reset',
    title?: string,
    buttonClassName?: string,
    iconClassName?: string,
    spanClassName?: string,
    icon?: string,
    isShowIcon?: boolean,
    isShowTitle?: boolean,
}>(), {
    icon: ''
});

const emit = defineEmits(["onSubmit"]);

const onSubmit = () => {
  emit('onSubmit');
}

</script>

<style>

</style>