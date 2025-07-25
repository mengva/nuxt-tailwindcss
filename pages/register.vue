
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
          @inputElm="(el) => inputFirstNameElm = el"
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
          @inputElm="(el) => inputLastNameElm = el"
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
          @inputElm="(el) => inputEmailElm = el"
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
          @inputElm="(el) => inputPasswordElm = el"
        />
        <p class="text-slate-600 dark:text-slate-400 mb-2 capitalize">Gender</p>
        <select ref="inputGenderElm" @change="onSelectedGender" v-model="body.gender" name="gender" class="mb-4 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 caret-slate-600 dark:caret-slate-300 w-full h-[60px] px-4 rounded-xl">
          <option value="">Select Gender</option>
          <option value="male">male</option>
          <option value="female">female</option>
          <option value="other">other</option>
        </select>
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


function onSelectedGender(event: InputEvent){
  body.value.gender = event.target?.value;
}

function onRegister(){
  console.log(inputEmailElm.value);
  console.log(body.value);
}
</script>

<style></style>