<template>
    <div id="app-bar" class="w-full h-[70px] sticky top-0 z-50 bg-linear-to-r from-cyan-800 to-purple-600 px-5">
        <div class="flex justify-between items-center h-full w-full">
            <div class="flex gap-x-1 items-center">
                <button type="button"
                    class="w-15 h-15 sm:hidden cursor-pointer flex rounded-full bg-slate-600/20 hover:bg-slate-600/30 hover:-translate-y-0.5">
                    <Icon name="fa:bars"
                        class="text-2xl m-auto text-slate-200" />
                </button>
                <Icon name="fa:user-secret" class="text-4xl text-pink-600" />
                <div class="ml-4 text-slate-200 text-2xl max-sm:hidden">{{ 'web e-commerce'.toUpperCase() }}</div>
            </div>
            <div class="flex gap-x-4">
                <button type="button" @click="onToggleDarkMode"
                    class="w-15 h-15 cursor-pointer flex rounded-full bg-slate-600/20 hover:bg-slate-600/30 hover:-translate-y-0.5">
                    <Icon :name="isDarkMode ? 'ic:baseline-light-mode' : 'ic:outline-nightlight-round'"
                        class="text-4xl m-auto text-slate-200" />
                </button>
                <button @click="navigateTo('/user/cart')" type="button"
                    class="relative max-sm:hidden w-15 h-15 cursor-pointer flex rounded-full bg-slate-600/20 hover:bg-slate-600/30 hover:-translate-y-0.5">
                    <Icon name="ic:baseline-shopping-cart" class="text-4xl m-auto text-slate-200" />
                    <div class="absolute hover:-translate-y-0.5 w-[30px] h-[30px] flex bg-pink-600/10 rounded-full -top-2 -right-2">
                        <div class="w-[15px] h-[15px] bg-pink-600 rounded-full m-auto"></div>
                    </div>
                </button>
                <button @click="navigateTo('/login')" type="button"
                    class="w-15 h-15 cursor-pointer flex rounded-full bg-slate-600/20 hover:bg-slate-600/30 hover:-translate-y-0.5 mr-2">
                    <Icon name="ic:sharp-person" class="text-4xl m-auto text-slate-200" />
                </button>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';

const isDarkMode = useCookie<boolean>("isDarkMode");
isDarkMode.value = isDarkMode.value ? isDarkMode.value : false;

function onToggleDarkMode() {
    isDarkMode.value = !isDarkMode.value;
    onGetBodyElement();
}

function onGetBodyElement() {
    const appContainer: HTMLElement | any = getAppContainerElm();
    if (appContainer) {
        appContainer.setAttribute("data-theme", isDarkMode.value ? 'dark' : 'light');
    }
}

function getAppContainerElm() {
    return document.getElementById("app-container");
}

function onAddClass(appBar: HTMLElement) {
    appBar.classList.add("shadow-2xl", "shadow-purple-500");
    // appBar.classList.replace("from-cyan-800", "from-purple-500");
}

function onRemoveClass(appBar: HTMLElement) {
    appBar.classList.remove("shadow-2xl", "shadow-purple-500");
    // appBar.classList.replace("from-purple-500", "from-cyan-800");
}

function onGetEmlAndAddEvent(){
    const appBar: HTMLElement | any = document.getElementById("app-bar");
    const appContainer: HTMLElement | any = getAppContainerElm();
    appContainer.addEventListener("scroll", () => {
        appContainer.scrollTop > 280 ?
            onAddClass(appBar) :
            onRemoveClass(appBar);
    });
}

onMounted(() => {
    onGetBodyElement();
    onGetEmlAndAddEvent();
});

</script>

<style></style>