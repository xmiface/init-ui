import { makeAutoObservable } from "mobx";
import { AuthStore } from "./AuthStore";
import { UserStore } from "./UserStore";
import { DndStore } from "./DndStore";


class Store {
  constructor() {
    makeAutoObservable(this);
  }

  dev: boolean = true;
  auth = new AuthStore(this);
  user = new UserStore(this);
  dnd = new DndStore(this);
}

export const RootStore = new Store();
