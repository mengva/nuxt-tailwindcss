<template>
    <div :class="divClassName">
        <p class="text-slate-600 dark:text-slate-400 mb-2 capitalize">{{ name }}</p>
        <input @input="onChangeValue" v-model="inputValue" ref="inputElement"
            :class="`${inputClassName} ${isError ? '!bg-rose-500/[.2] !caret-rose-500 placeholder:!text-rose-500 !text-rose-500' : isSuccess ? '!bg-[#28915746] !caret-[#289157] placeholder:!text-[#289157] !text-[#289157]' : ''}`"
            :type="type" 
            :readOnly="readOnly" 
            :disabled="disable" 
            :autoComplete="autoCompleted" 
            :name="name" 
            :id="id"
            :placeholder="placeholder" />
        <p :class="`${isError ? 'text-rose-500 block' : isSuccess ? 'text-[#289157] block' : 'hidden'} text-md mt-1`">{{ message }}</p>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const props = defineProps({
    inputClassName: String,
    divClassName: String,
    type: String,
    readOnly: Boolean,
    autoCompleted: String,
    disable: Boolean,
    name: String,
    id: String,
    placeholder: String,
});

const inputElement = ref<HTMLInputElement | null>(null);
const emit = defineEmits(['inputElm'])

const isError = ref(false);
const isSuccess = ref(false);
const message = ref("");
const inputValue = ref("");

function onChangeValue(){
    emit("inputElm", inputValue.value);
    if(!inputValue.value){
        setError(false, `${props.name} is required`);
        return;
    }
    if(props.type === "password" && inputValue.value.length < 6){
        setError(false, `password must be greater than 6 characters`);
        return;
    }
    if(props.type === "email" && !emailFormatter.test(inputValue.value)){
        setError(false, `invalid ${props.name}`);
        return;
    }
    if(inputValue.value.length <= 2){
        setError(false, `${props.name} must be greater than 2 characters`);
        return;
    }
    setError(true, '');
}

function setError(success: boolean, msg: string){
    isError.value = !success;
    isSuccess.value = success;
    message.value = msg;
}

</script>

<style></style>