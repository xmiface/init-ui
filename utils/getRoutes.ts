import { IDBRouteDto } from "../types/dto";

export let defalutLinks = [
    {
        href: '/',
        heading: 'home',
        description: '',
    },
] as IDBRouteDto[];

export const getRoutes = (role: 'admin' | 'moder' | 'driver') => {
    if (role === 'admin') {
        return [
            ...defalutLinks,
            {
                href: '/admin',
                heading: 'admin page',
                description: '',
            },
            {
                href: '/moder',
                heading: 'moder page',
                description: '',
            },
        ]
    }

    if (role === 'moder') {
        return [
            ...defalutLinks,
            {
                href: '/moder',
                heading: 'moder page',
                description: '',
            },
        ]
    }

    return defalutLinks;
}