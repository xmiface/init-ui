import { TrashIcon } from "@heroicons/react/24/solid";

export const asideTop = [
    {
        id: 'aside-top-1',
        icon: <TrashIcon className="h-4 w-4" />, title: 'Cryptocurrency', children: [
            { id: 'aside-top-1-1', icon: <TrashIcon className="h-4 w-4" />, title: 'Marketplace' },
            { id: 'aside-top-1-2', icon: <TrashIcon className="h-4 w-4" />, title: 'Trading', unread: true },
            { id: 'aside-top-1-3', icon: <TrashIcon className="h-4 w-4" />, title: 'Statistics' },
        ]
    },
    {
        id: 'aside-top-2', icon: <TrashIcon className="h-4 w-4" />, title: 'Services', children: []
    },
    {
        id: 'aside-top-3', icon: <TrashIcon className="h-4 w-4" />, title: 'Cards', children: []
    },
    {
        id: 'aside-top-4', icon: <TrashIcon className="h-4 w-4" />, title: 'Invesments', children: []
    },
]

export const asideBottom = [
    {
        id: 'aside-bottom-1', icon: <TrashIcon className="h-4 w-4" />, title: 'History', children: []
    }, {
        id: 'aside-bottom-2', icon: <TrashIcon className="h-4 w-4" />, title: 'Messages', children: [], unread: true
    }, {
        id: 'aside-bottom-3', icon: <TrashIcon className="h-4 w-4" />, title: 'Settings', children: []
    },
]