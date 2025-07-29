
<template>
  <div class="w-full min-h-screen sm:p-0 px-4 flex justify-center items-center relative">
    <div @click="navigateTo('/login')"
      class="cursor-pointer rounded-full absolute left-1 top-1 w-[45px] h-[45px] bg-slate-200 dark:bg-slate-800 hover:dark:bg-slate-800/65 hover:bg-slate-100 grid place-content-center">
      <Icon name="mdi:arrow-left" class="text-2xl text-slate-800 dark:text-slate-300" />
    </div>
    <div class="w-[550px] px-8 py-10 h-auto rounded-4xl bg-slate-200 dark:bg-slate-900">
      <h1 class="text-purple-600 text-center text-4xl font-semibold mb-2">REGISTER</h1>
      <p class="text-center text-slate-600 dark:text-slate-400">Please enter your information to register</p>
      <form @submit.prevent="onRegister()" class="mt-6">
        <Input
          div-class-name="mb-4"
          input-class-name="bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 caret-slate-600 dark:caret-slate-300 w-full h-[60px] px-4 rounded-xl"
          type="text"
          :read-only="false"
          :auto-completed="'on'"
          :disable="false"
          name="firstName"
          id="firstName"
          placeholder="Enter your firstName..."
          :input-message="inputErrorMessage.firstName"
          @input-value="(value) => body.firstName = value"
          @input-elm="(elm) => inputFirstNameElm = elm"
        />
        <Input
          div-class-name="mb-4"
          input-class-name="bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 caret-slate-600 dark:caret-slate-300 w-full h-[60px] px-4 rounded-xl"
          type="text"
          :read-only="false"
          :auto-completed="'on'"
          :disable="false"
          name="lastName"
          id="lastName"
          placeholder="Enter your lastName..."
          :input-message="inputErrorMessage.lastName"
          @input-value="(value) => body.lastName = value"
          @input-elm="(elm) => inputLastNameElm = elm"
        />
        <Input
          div-class-name="mb-4"
          input-class-name="bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 caret-slate-600 dark:caret-slate-300 w-full h-[60px] px-4 rounded-xl"
          type="email"
          :read-only="false"
          :auto-completed="'on'"
          :disable="false"
          name="email"
          id="email"
          placeholder="Enter your email..."
          :input-message="inputErrorMessage.email"
          @input-value="(value) => body.email = value"
          @input-elm="(elm) => inputEmailElm = elm"
        />
        <Input
          div-class-name="mb-4"
          input-class-name="bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 caret-slate-600 dark:caret-slate-300 w-full h-[60px] px-4 rounded-xl"
          type="password"
          :read-only="false"
          :auto-completed="'on'"
          :disable="false"
          name="password"
          id="password"
          placeholder="Enter your password..."
          :input-message="inputErrorMessage.password"
          @input-value="(value) => body.password = value"
          @input-elm="(elm) => inputPasswordElm = elm"
        />
        <Selected
          div-class-name="mb-4"
          input-class-name="bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 caret-slate-600 dark:caret-slate-300 w-full h-[60px] px-4 rounded-xl"
          name="gender"
          title="Gender"
          :inputMessage="inputErrorMessage.gender"
          :lists="[
            {
              title: 'Choose Gender',
              value: ''
            },
            {
              title: 'Male',
              value: 'male'
            },
            {
              title: 'Female',
              value: 'female'
            },
            {
              title: 'Other',
              value: 'other'
            }
          ]"
          @input-value="(value) => body.gender = value"
          @input-elm="(elm) => inputGenderElm = elm"
        />
          <Button type="submit" title="REGISTER"
            :button-class-name="`mb-4 rounded-2xl bg-purple-600 hover:bg-purple-700 cursor-pointer w-full h-[60px] text-slate-200 flex justify-center items-center px-4 gap-x-2`"
            icon-class-name="text-2xl text-slate-200" span-class-name="text-xl text-slate-200"
            icon="mdi:register" :isShowIcon="true" :isShowTitle="true"
            @on-submit="() => {}" />
          <div class="flex justify-center gap-x-4 items-center">
            <p class="text-slate-600 dark:text-slate-400">You already an account</p>
            <p @click="navigateTo('/login')" class="tracking-[1px] text-purple-600 underline px-4 py-1 hover:bg-slate-400/40 dark:hover:bg-slate-800/40 rounded-xl cursor-pointer">login</p>
          </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts" setup>

import { ref } from "vue";
import {inputMessage} from "../composables/constants"

definePageMeta({
  layout: "spacial"
});

const inputFirstNameElm = ref<HTMLInputElement | null>(null);
const inputLastNameElm = ref<HTMLInputElement | null>(null);
const inputEmailElm = ref<HTMLInputElement | null>(null);
const inputPasswordElm = ref<HTMLInputElement | null>(null);
const inputGenderElm = ref<HTMLInputElement | null>(null);

const body = ref({
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  gender: '',
});

const inputErrorMessage = ref({
  firstName: {...inputMessage},
  lastName: {...inputMessage},
  email: {...inputMessage},
  password: {...inputMessage},
  gender: {...inputMessage},
});

function onSelectedGender(event: InputEvent){
  body.value.gender = event.target?.value;
}

function onRegister(){
  try {
    console.log(inputErrorMessage.value);
  } catch (error) {
    
  }
}
</script>

<style></style>