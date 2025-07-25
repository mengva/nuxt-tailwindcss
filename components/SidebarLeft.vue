<template>
    <div id="sidebar" :style="{ 'height': 'calc(100% - 70px)', 'width': `${sidebarWidth}` }"
        class="z-10 fixed left-0 top-[70px] bg-slate-50 dark:bg-slate-900">
        <div class="relative inset-0 w-full h-full flex flex-col">
            <div @click="toggleSideBarWidth()"
                :class="`${getMaxWidth ? 'h-[150px]' : 'h-[80px]'} cursor-pointer w-full bg-purple-600 flex`">
                <Icon name="ic:sharp-person"
                    :class="`${getMaxWidth ? 'text-8xl' : 'text-5xl'} m-auto text-slate-200`" />
            </div>
            <div class="grow mt-2">
                <Button v-for="(item, index) in GET_MENUS" :key="index" type="button" :title="item.title"
                    :button-class-name="`${item.active ? 'bg-purple-600' : 'hover:bg-purple-700'} ${!getMaxWidth ? 'justify-center' : ''} btn-hover cursor-pointer w-full h-[65px] text-slate-200 flex gap-x-2 px-4 items-center`"
                    :icon-class-name="`${item.active ? 'text-slate-300' : 'text-slate-600 dark:text-slate-300'} text-3xl`"
                    :span-class-name="`${item.active ? 'text-slate-300' : 'text-slate-600 dark:text-slate-300'} text-xl`"
                    :icon="item.icon" :isShowIcon="true" :isShowTitle="getMaxWidth ? true : false" @on-submit="() => {
                        router.push(item.to);
                    }" />
            </div>
            <div>
                <Button v-if="token" type="button" title="LOGOUT"
                    :button-class-name="`${!getMaxWidth && 'justify-center'} bg-purple-600 hover:bg-purple-700 cursor-pointer w-full h-[60px] text-slate-200 flex items-center px-4 gap-x-2`"
                    icon-class-name="text-2xl text-slate-200" span-class-name="text-xl text-slate-200"
                    icon="ic:baseline-logout" :isShowIcon="true" :isShowTitle="getMaxWidth ? true : false"
                    @on-submit="onLogout" />
                <Button v-else type="button" title="LOGIN"
                    :button-class-name="`${!getMaxWidth && 'justify-center'} bg-purple-600 hover:bg-purple-700 cursor-pointer w-full h-[60px] text-slate-200 flex items-center px-4 gap-x-2`"
                    icon-class-name="text-2xl text-slate-200" span-class-name="text-xl text-slate-200"
                    icon="ic:baseline-login" :isShowIcon="true" :isShowTitle="getMaxWidth ? true : false"
                    @on-submit="onLogin" />
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { useRoute, useRouter } from 'vue-router';
import { computed, onMounted } from "vue";
import { MENUS, minWidth, maxWidth } from '~/composables/constants';
import type { MENUS_SCHEMA } from '~/models/menus';

// variables

const route = useRoute();
const router = useRouter();

// use cookie
const sidebarWidth = useCookie<string>("width");
const token = useCookie<string>('token');

// computed

const GET_MENUS = computed(() => {
    let menus: MENUS_SCHEMA[] = [];
    menus = MENUS.map((menu: MENUS_SCHEMA) => {
        menu.active = route.fullPath === menu.to;
        if (menu.children.length) {
            menu.children.map((children: MENUS_SCHEMA) => {
                children.active = menu.active = children.to === route.fullPath;
                return children;
            });
        }
        return menu;
    });
    return menus;
});

// const GET_MENUS = computed(() => {
//     const menus: MENUS_SCHEMA[] = [];
//     MENUS.forEach((menu: MENUS_SCHEMA) => {
//         menu.active = route.fullPath === menu.to;
//         if (menu.children.length) {
//             menu.children.forEach((children: MENUS_SCHEMA) => {
//                 if (children.to === route.fullPath) {
//                     children.active = menu.active = true;
//                 }
//             });
//         }
//         menus.push(menu);
//     });
//     return menus;
// });
const getMaxWidth = computed(() => sidebarWidth.value === maxWidth);

// method

function onLogout() { }
function onLogin() {
    router.push('/login');
}

function setSideBarWidth() {
    sidebarWidth.value = sidebarWidth.value === minWidth ? minWidth : maxWidth;
}

function toggleSideBarWidth() {
    sidebarWidth.value = sidebarWidth.value === minWidth ? maxWidth : minWidth;
}

// onMounted

onMounted(() => {
    setSideBarWidth();
});

</script>

<style></style>