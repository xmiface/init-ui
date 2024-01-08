import { faker } from "@faker-js/faker";
import axios from "axios";
import { makeAutoObservable } from "mobx";

export type Card = { id: string, title: string }

const createItem = (id: string) => {
    return { id: faker.datatype.uuid() + '', title: `item ${faker.company.name()}` }
}

export class DndStore {
    RootStore: any;
    constructor(root: any) {
        makeAutoObservable(this), (this.RootStore = root);
    }

    items = new Array(10).fill(1).map((el, idx) => createItem(Date.now() + '')) as Card[];

    swapItems(elId: string, underId: string) {
        let idxToAdd = this.items.findIndex(el => el.id === underId)
        let before = [...this.items.slice(0, idxToAdd)].filter(el => el.id !== elId);
        let after = [...this.items.slice(idxToAdd).filter(el => el.id !== elId)]
        let elToAdd = this.items.find(el => el.id === elId)
        this.items = JSON.parse(JSON.stringify([...before, elToAdd, ...after]))
    }

    removeItem(elId: string) {
        this.items = this.items.filter(el => el.id !== elId)
    }
}
