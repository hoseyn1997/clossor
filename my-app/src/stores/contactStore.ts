import { makeAutoObservable, runInAction } from "mobx";
import { ContactToUs } from "../api/models/contactus";
import agent from "../api/agent";


export class ContactStore {
  adding = false;
  currectContact: ContactToUs | null = null;

  contacts: ContactToUs[] = [];
  getting = false;

  constructor() {
    makeAutoObservable(this);
  }

  addNewContact = async (contactUs: ContactToUs) => {
    this.adding = true;
    try {
      const addedContact = await agent.ContactUs.add(contactUs);
      runInAction(() => {
        this.currectContact = addedContact;
        this.adding = false;
      })
    } catch (error) {
      console.log(error);
      runInAction(() => this.adding = false)
    }
  }

  getContacts = async () => {
    this.getting = true;
    try {
      const contacts = await agent.ContactUs.list();
      runInAction(() => {
        this.contacts = contacts;
        this.getting = false;
      })
    } catch (error) {
      console.log(error);
      runInAction(() => this.getting = false)
    }
  }

}