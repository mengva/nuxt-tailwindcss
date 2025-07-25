import type { MENUS_SCHEMA } from "~/models/menus";

export const maxWidth = '300px';
export const minWidth = '80px';
export const emailFormatter = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;

export const MENUS: MENUS_SCHEMA[] = [
    {
        title: 'Home',
        icon: 'ic:round-home',
        to: '/',
        active: false,
        children: [] 
    },
    {
        title: 'Order',
        icon: 'ic:baseline-history',
        to: '/user/order',
        active: false,
        children: []
    },
    {
        title: 'Cart',
        icon: 'ic:baseline-shopping-cart',
        to: '/user/cart',
        active: false,
        children: []
    },
    {
        title: 'Profile',
        icon: 'ic:sharp-person',
        to: '/user/profile',
        active: false,
        children: []
    }
];