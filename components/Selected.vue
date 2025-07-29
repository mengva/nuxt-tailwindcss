<template>
  <div :class="divClassName">
    <p class="text-slate-600 dark:text-slate-400 mb-2 capitalize">{{ title }}</p>
    <select ref="inputElm" @change="onSelected" v-model="inputValue" :name="name" :class="`${inputClassName} ${inputMessage?.isError ? '!bg-rose-500/[.2] !caret-rose-500 placeholder:!text-rose-500 !text-rose-500' : inputMessage?.isSuccess ? '!bg-[#28915746] !caret-[#289157] placeholder:!text-[#289157] !text-[#289157]' : ''}`">
        <option v-for="(item, index) in lists" :key="index" :value="item?.value">{{ item?.title }}</option>
    </select>
    <p :class="`${inputMessage?.isError ? 'text-rose-500 block' : inputMessage?.isSuccess ? 'text-[#289157] block' : 'hidden'} text-md mt-1`">{{ inputMessage?.message }}</p>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
    inputClassName: String,
    divClassName: String,
    title: String,
    name: String,
    lists: Array,
    inputMessage: Object
});

const emit = defineEmits(['inputValue', 'inputElm'])

const inputValue = ref("");
const inputEml = ref<HTMLSelectElement>();

function onSelected(){
    emit("inputValue", inputValue.value);
    if(!inputValue.value){
        setError(false, `${props.title} is required`);
        return;
    }
    setError(true, '');
}

function setError(isSuccess: boolean, msg: string){
    if (props.inputMessage) {
        props.inputMessage.isError = !isSuccess;
        props.inputMessage.isSuccess = isSuccess;
        props.inputMessage.message = msg;
    }
}

onMounted(() => {
    if(inputEml.value){
        emit("inputElm", inputEml.value);
    }
});
</script>

<style>

</style>