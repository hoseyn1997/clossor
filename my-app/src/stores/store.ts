import { createContext, useContext } from "react";
import UserStore from "./userStore";
import { CourseStore } from "./courseStore";
import ModalStore from "./modalStore";
import { ContactStore } from "./contactStore";


export interface Store {
  userStore: UserStore,
  courseStore: CourseStore,
  modalStore: ModalStore,
  contactStore: ContactStore,
}

export const store: Store = {
  userStore: new UserStore(),
  courseStore: new CourseStore(),
  modalStore: new ModalStore(),
  contactStore: new ContactStore(),
}

export const StoreContext = createContext(store);

export function useStore() {
  return useContext(StoreContext);
}