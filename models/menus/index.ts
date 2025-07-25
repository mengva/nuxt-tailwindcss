export interface MENUS_SCHEMA {
    to: string;
    title: string;
    icon: string;
    active: boolean;
    children: MENUS_SCHEMA[];
}