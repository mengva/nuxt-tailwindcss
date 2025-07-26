<template>
    <div :class="divClassName">
        <p class="text-slate-600 dark:text-slate-400 mb-2 capitalize">{{ name }}</p>
        <input @input="onChangeValue" v-model="inputValue" ref="inputElement"
            :class="`${inputClassName} ${inputMessage?.isError ? '!bg-rose-500/[.2] !caret-rose-500 placeholder:!text-rose-500 !text-rose-500' : inputMessage?.isSuccess ? '!bg-[#28915746] !caret-[#289157] placeholder:!text-[#289157] !text-[#289157]' : ''}`"
            :type="type" 
            :readOnly="readOnly" 
            :disabled="disable" 
            :autoComplete="autoCompleted" 
            :name="name" 
            :id="id"
            :placeholder="placeholder" />
        <p :class="`${inputMessage?.isError ? 'text-rose-500 block' : inputMessage?.isSuccess ? 'text-[#289157] block' : 'hidden'} text-md mt-1`">{{ inputMessage?.message }}</p>
    </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import { emailFormatter } from '../composables/constants';

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
    inputMessage: Object
});

const inputElement = ref<HTMLInputElement | null>(null);
const emit = defineEmits(['inputValue', 'inputElm'])

const inputValue = ref("");

function onChangeValue(){
    emit("inputValue", inputValue.value);
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
    if(props.name === 'otp' && inputValue.value.length < 6){
        setError(false, `${props.name} must be equal to 6 characters`);
        return;
    }
    if(inputValue.value.length <= 2){
        setError(false, `${props.name} must be greater than 2 characters`);
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
    if(inputElement.value){
        emit('inputElm', inputElement.value);
    }
});
</script>

<style></style>