import { makeAutoObservable } from "mobx";
import { ReactNode } from "react";

export interface modal {
  open: boolean,
  content: ReactNode,
}

export default class ModalStore {
  modal: modal = {
    open: false,
    content: ""
  }


  constructor() {
    makeAutoObservable(this);
  }

  openModal = (modalContent: ReactNode) => {
    this.modal.open = true;
    this.modal.content = modalContent;
  }
  closeModal = () => {
    this.modal.open = false;
    this.modal.content = ""
    console.log('modal closed bro...')
  }

}