import axios from "axios";
import { makeAutoObservable } from "mobx";
import { IDBRouteDto } from "../types/dto";

export class UserStore {
    RootStore: any;
    constructor(root: any) {
        makeAutoObservable(this), (this.RootStore = root);
    }

    links = [] as IDBRouteDto[];

    logout() {
    }
}
