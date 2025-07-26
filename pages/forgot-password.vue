
<template>
  <div class="w-full min-h-screen sm:p-0 px-4 flex justify-center items-center relative">
    <div @click="navigateTo('/login')"
      class="cursor-pointer rounded-full absolute left-1 top-1 w-[45px] h-[45px] bg-slate-200 dark:bg-slate-800 hover:dark:bg-slate-800/65 hover:bg-slate-100 grid place-content-center">
      <Icon name="mdi:arrow-left" class="text-2xl text-slate-800 dark:text-slate-300" />
    </div>
    <div class="w-[550px] px-8 py-10 h-auto rounded-4xl bg-slate-200 dark:bg-slate-900">
      <h1 class="text-purple-600 text-center text-4xl font-semibold mb-2">FORGOT-PASSWORD</h1>
      <p class="text-center text-slate-600 dark:text-slate-400">Please enter your email to receive OTP</p>
      <form @submit.prevent="() => {}" class="mt-6">
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
        <Button type="submit" title="SEND"
          :button-class-name="`mb-4 rounded-2xl bg-purple-600 hover:bg-purple-700 cursor-pointer w-full h-[60px] text-slate-200 flex justify-center items-center px-4 gap-x-2`"
          icon-class-name="text-2xl text-slate-200" span-class-name="text-xl text-slate-200"
          icon="mdi:send-variant" :isShowIcon="true" :isShowTitle="true"
          @on-submit="() => {}" />
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

const inputEmailElm = ref<HTMLInputElement>();

const body = ref({
  email: '',
});

const inputErrorMessage = ref({
  email: {...inputMessage},
});

</script>

<style></style>